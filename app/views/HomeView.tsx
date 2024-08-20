import { Logo } from '~/components/Logo';
import * as css from './HomeView.css';
import { Metrics } from '~/components/Metrics';
import { Notes } from '~/components/Notes';
import { TextContent } from '~/components/TextContent';
import { Footer } from '~/components/Footer';

export function HomeView(): JSX.Element {
  return (
    <div className={css.container}>
      <Logo />
      <TextContent />
      <Metrics />
      <Notes />
      <Footer />
    </div>
  );
}
