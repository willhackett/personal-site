import { useHomeContext } from '~/contexts/home';

import * as css from './TextContent.css';

export function TextContent(): JSX.Element {
  const { textContent } = useHomeContext();

  return (
    <div>
      {textContent.map((content) => {
        switch (content.name) {
          case 'HOMEPAGE_HEADING': {
            return (
              <div className={css.root} key={content.name}>
                <h2 className={css.heading}>{content.text}</h2>
              </div>
            );
          }
        }
      })}
    </div>
  );
}
