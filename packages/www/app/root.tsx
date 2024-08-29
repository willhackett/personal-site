import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import 'normalize.css/normalize.css';
import * as css from './style/global.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="canonical" href="https://www.willhackett.uk/" />
        <link
          rel="alternate"
          type="application/json"
          href="https://notes.willhackett.com/index.json"
          title="Will Hackett"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          href="https://notes.willhackett.com/index.xml"
          title="Will Hackett"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <Links />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://www.willhackett.com/',
              name: 'Will Hackett',

              inLanguage: 'en',
              url: 'https://www.willhackett.com/',

              publisher: {
                '@type': 'Person',
                name: 'Will Hackett',
                jobTitle: 'Software Engineer',
                url: 'https://www.willhackett.com/',
              },
            }),
          }}
        />
      </head>
      <body className={css.body}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
