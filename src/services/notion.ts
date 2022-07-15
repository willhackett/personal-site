import { NOTION_API_TOKEN } from '@config';
import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: NOTION_API_TOKEN,
});

export const DB_ARCHIVE = '8c44f198891344b890dc233cfcc35398';
export const DB_SNIPPETS = '7241ad963bfc4a3ca9c8a29a43adbdb4';
export const DB_PROJECTS = '209599167cec4685ade7d0494471bc63';
