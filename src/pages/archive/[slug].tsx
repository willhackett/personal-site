import { PrimaryLayout } from '@layouts/Primary';
import { DB_ARCHIVE, notion } from '@services/notion';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

interface PostProps {
  results: any;
}

export default function Index(props: PostProps) {
  const hero = (
    <h1 className="index__h1">
      Hi, I'm <strong>Will Hackett</strong>. I'm a software engineer based in
      Australia at <strong>Blinq</strong> where our team is building the best
      way to share your identity.
    </h1>
  );

  return <PrimaryLayout headerProps={{ children: hero }}>Test</PrimaryLayout>;
}

export async function getServerSideProps({
  query: { year, slug },
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<PostProps>> {
  if (!slug) {
    return {
      notFound: true,
    };
  }

  try {
    const queryResponse = await notion.databases.query({
      database_id: DB_ARCHIVE,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug?.toString(),
        },
      },
    });

    if (queryResponse.results.length === 0) {
      return {
        notFound: true,
      };
    }

    const pageResponse = await notion.pages.retrieve({
      page_id: queryResponse.results[0].id,
    });

    if (!pageResponse) {
      return {
        notFound: true,
      };
    }

    console.log(pageResponse);

    return {
      props: {
        results: '',
      },
    };
  } catch (err) {
    throw new Error('Internal Server Error');
  }
}
