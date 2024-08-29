import { LoaderFunctionArgs, MetaFunction, defer } from '@remix-run/cloudflare';
import { Await, useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';
import { HomeContext, HomeContextProvider } from '~/contexts/home';
import {
  HomeViewDocument,
  MetricsDocument,
  NotesDocument,
} from '~/gql/graphql';
import { Container } from '~/layouts/Container';
import { GraphQLService } from '~/service/graphql';
import { HomeView } from '~/views/HomeView';

type IndexPageProps = {
  context: HomeContext;
};

export async function loader({ context }: LoaderFunctionArgs) {
  const { client } = new GraphQLService(context.cloudflare.env.api);

  const metrics = client.request(MetricsDocument).then((data) => data.metrics);
  const notes = client.request(NotesDocument).then((data) => data.notes);
  const textContent = await client
    .request(HomeViewDocument)
    .then((data) => data.textContent);

  return defer({
    textContent,
    metrics,
    notes,
  });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const textContent = data?.textContent;

  if (!textContent) {
    throw new Error('Failed to load text content');
  }

  const textContentMap = textContent.reduce((acc, { name, text }) => {
    acc.set(name, text);
    return acc;
  }, new Map<string, string>());

  return [
    { title: textContentMap.get('HOMEPAGE_TITLE') },
    {
      name: 'description',
      content: textContentMap.get('HOMEPAGE_HEADING'),
    },
    {
      name: 'og:title',
      content: textContentMap.get('HOMEPAGE_TITLE'),
    },
    {
      name: 'og:description',
      content: textContentMap.get('HOMEPAGE_HEADING'),
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: '@willhackett',
    },
    {
      name: 'twitter:title',
      content: textContentMap.get('HOMEPAGE_TITLE'),
    },
    {
      name: 'twitter:description',
      content: textContentMap.get('HOMEPAGE_HEADING'),
    },
  ];
};

export function IndexPage({ context }: IndexPageProps): JSX.Element {
  return (
    <HomeContextProvider value={context}>
      <Container>
        <HomeView />
      </Container>
    </HomeContextProvider>
  );
}

export default function Index() {
  const { textContent, metrics, notes } = useLoaderData<typeof loader>();

  const awaitable = Promise.all([metrics, notes]);

  return (
    <Suspense
      fallback={<IndexPage context={{ textContent, metrics: [], notes: [] }} />}
    >
      <Await resolve={awaitable}>
        {([metrics, notes]) => (
          <IndexPage context={{ textContent, metrics, notes }} />
        )}
      </Await>
    </Suspense>
  );
}
