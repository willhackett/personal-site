import { ApolloServer } from '@apollo/server';
import { startServerAndCreateCloudflareWorkersHandler } from '@as-integrations/cloudflare-workers';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloError } from '@apollo/client';
import { createLocalJWKSet, JSONWebKeySet, jwtVerify } from 'jose';
import { getContent } from './service/content';
import { getPosts } from './service/posts';

interface Context {
  authorized: boolean;
  env: Env;
  notes: Fetcher;
}

type FloatMetric = {
  name: 'CALORIES_BURNED' | 'MILES_CYCLED' | 'GIT_COMMITS';
  value: number;
};

type MediaMetric = {
  name: 'FAVOURITE_SONG';
  title: string;
  artist: string;
};

type TextMetric = {
  name: 'CURRENT_CITY';
  value: string;
};

type Metric = FloatMetric | MediaMetric | TextMetric;

const typeDefs = `#graphql
  type FloatMetric {
    name: MetricName!
    float: Float!
  }

  type MediaMetric {
    name: MetricName!
    title: String!
    artist: String!
  }

  type TextMetric {
    name: MetricName!
    text: String!
  }

  input FloatMetricInput {
    name: MetricName!
    float: Float!
  }

  input MediaMetricInput {
    name: MetricName!
    title: String!
    artist: String!
  }

  input TextMetricInput {
    name: MetricName!
    text: String!
  }
  
  type TextContent {
    text: String!
    name: String!
  }

  type NoteContent {
    date: String!
    permalink: String!
    section: String!
    summary: String!
    title: String!
  }

  enum MetricName {
    CALORIES_BURNED
    MILES_CYCLED
    FAVOURITE_SONG
    GIT_COMMITS
    CURRENT_CITY
  }

  enum TextContentName {
    HOMEPAGE_TITLE
    HOMEPAGE_HEADING
  }

  enum TextContentLocation {
    HOMEPAGE
  }

  union Metric = FloatMetric | MediaMetric | TextMetric

  type Query {
    metrics: [Metric!]!
    textContent(location: String): [TextContent!]!
    notes: [NoteContent!]!
  }

  type Mutation {
    setFloatMetric(input: FloatMetricInput!): FloatMetric!
    setMediaMetric(input: MediaMetricInput!): MediaMetric!
    setTextMetric(input: TextMetricInput!): TextMetric!
  }
`;

const resolvers = {
  Metric: {
    __resolveType: (obj: Metric) => {
      switch (obj.name) {
        case 'CALORIES_BURNED':
        case 'MILES_CYCLED':
        case 'GIT_COMMITS':
          return 'FloatMetric';
        case 'FAVOURITE_SONG':
          return 'MediaMetric';
        case 'CURRENT_CITY':
          return 'TextMetric';
      }
    },
  },
  Query: {
    textContent: (root, { location }, { notes }: Context) =>
      getContent(notes, location),

    metrics: async (_, __, { env }: Context) => {
      const items = await env.metric.list();

      return Promise.all(
        items.keys.map(async (key) => {
          const value = await env.metric.get(key.name);
          return JSON.parse(value);
        })
      );
    },

    notes: async (_, __, { notes }: Context) => {
      const content = await getPosts(notes);

      return content;
    },
  },
  Mutation: {
    setFloatMetric: async (
      _,
      { input }: { input: FloatMetric },
      { env, authorized }: Context
    ) => {
      if (!authorized) {
        throw new ApolloError({ clientErrors: [new Error('Unauthorized')] });
      }

      const json = JSON.stringify(input);

      await env.metric.put(input.name, json);

      return input;
    },
    setMediaMetric: (
      _,
      { input }: { input: MediaMetric },
      { env, authorized }: Context
    ) => {
      if (!authorized) {
        throw new ApolloError({ clientErrors: [new Error('Unauthorized')] });
      }

      const json = JSON.stringify(input);

      env.metric.put(input.name, json);

      return input;
    },
    setTextMetric: (
      _,
      { input }: { input: TextMetric },
      { env, authorized }: Context
    ) => {
      if (!authorized) {
        throw new ApolloError({ clientErrors: [new Error('Unauthorized')] });
      }

      const json = JSON.stringify(input);

      env.metric.put(input.name, json);

      return input;
    },
  },
};

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ footer: false })],
});

export default {
  fetch: startServerAndCreateCloudflareWorkersHandler<Env, Context>(server, {
    context: async ({ env, request }) => {
      const token =
        request.headers.get('Authorization')?.split('Bearer ')[1] || '';

      let authorized = false;

      const jwksResponse = await fetch(
        'https://login.willhackett.com/oauth2/default/v1/keys',
        {
          cf: {
            cacheTtl: 60,
            cacheEverything: true,
          },
        }
      );

      const jwksJson = (await jwksResponse.json()) as JSONWebKeySet;

      const jwks = createLocalJWKSet(jwksJson);

      if (token) {
        // authorize
        try {
          await jwtVerify(token, jwks, {
            issuer: 'https://login.willhackett.com/oauth2/default',
          });

          authorized = true;
        } catch (error) {
          console.error(error);
        }
      }

      return { env, authorized, notes: env.notes };
    },
  }),
};
