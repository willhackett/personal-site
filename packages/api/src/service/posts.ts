interface Content {
  content: string;
  date: string;
  permalink: string;
  section: string;
  summary: string;
  title: string;
}

export async function getPosts(fetcher: Fetcher) {
  try {
    const response = await fetcher.fetch(
      'https://notes.willhackett.com/index.json'
    );

    if (response.ok === false) {
      const text = await response.text();
      console.error('Error fetching content', text);
      return [];
    }

    const content = (await response.json()) as Content[];

    return content.filter(({ content }) => !!content);
  } catch (error) {
    console.error('Error fetching content', error);
    return [];
  }
}
