interface Content {
  text: string;
  location: string;
  name: string;
}

interface Response {
  content: Content[];
}

export async function getContent(fetcher: Fetcher, forLocation?: string) {
  try {
    const response = await fetcher.fetch(
      'https://notes.willhackett.com/content.json'
    );

    if (response.ok === false) {
      const text = await response.text();
      console.error('Error fetching content', text);
      return [];
    }

    const { content } = (await response.json()) as Response;

    return content.filter(
      ({ location }) => !forLocation || location === forLocation
    );
  } catch (error) {
    console.error('Error fetching content', error);
    return [];
  }
}
