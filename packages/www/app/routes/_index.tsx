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

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    {
      name: 'description',
      content: 'Welcome to Remix on Cloudflare!',
    },
  ];
};

export async function loader({ context }: LoaderFunctionArgs) {
  const { client } = new GraphQLService(context.cloudflare.env.api);

  const textContent = await client
    .request(HomeViewDocument)
    .then((data) => data.textContent);
  const metrics = client.request(MetricsDocument).then((data) => data.metrics);
  const notes = client.request(NotesDocument).then((data) => data.notes);

  return defer({
    textContent,
    metrics,
    notes,
  });
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

export function IndexPage({ context }: IndexPageProps) {
  return (
    <HomeContextProvider value={context}>
      <Container>
        <HomeView />
      </Container>
    </HomeContextProvider>
  );
}
