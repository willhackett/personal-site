import * as css from './HomeView.css';
import { Metrics } from '~/components/Metrics';
import { Notes } from '~/components/Notes';
import { TextContent } from '~/components/TextContent';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

export function HomeView(): JSX.Element {
  return (
    <div className={css.container}>
      <Header />
      <TextContent />
      <Metrics />
      <Notes />
      <Footer />
    </div>
  );
}
