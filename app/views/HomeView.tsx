import { Logo } from '~/components/Logo';
import * as css from './HomeView.css';
import { Metrics } from '~/components/Metrics';
import { TextContent } from '~/gql/graphql';

type HomeViewProps = {
  textContent: TextContent[];
};

export function HomeView({ textContent }: HomeViewProps): JSX.Element {
  return (
    <div className={css.container}>
      <Logo />
      {textContent.map((content) => {
        switch (content.name) {
          case 'HOMEPAGE_HEADING': {
            return (
              <div className={css.introContainer} key={content.name}>
                <h2 className={css.introHeading}>{content.text}</h2>
              </div>
            );
          }
        }
      })}

      <Metrics />
    </div>
  );
}
