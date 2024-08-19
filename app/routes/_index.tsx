import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { MetricsProvider } from '~/contexts/metrics';
import { HomeViewQueryDocument, HomeViewQueryQuery } from '~/gql/graphql';
import { Container } from '~/layouts/Container';
import { GraphQLService } from '~/service/graphql';
import { HomeView } from '~/views/HomeView';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    {
      name: 'description',
      content: 'Welcome to Remix on Cloudflare!',
    },
  ];
};

export async function loader({
  context,
}: LoaderFunctionArgs): Promise<HomeViewQueryQuery> {
  const { client } = new GraphQLService(context.cloudflare.env.GRAPHQL_URI);

  return await client.request(HomeViewQueryDocument);
}

export default function Index() {
  const { metrics, textContent } = useLoaderData<typeof loader>();

  return (
    <MetricsProvider value={{ metrics }}>
      <Container>
        <HomeView textContent={textContent} />
      </Container>
    </MetricsProvider>
  );
}
