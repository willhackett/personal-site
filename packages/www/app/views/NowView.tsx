import * as css from './HomeView.css';
import { Metrics } from '~/components/Metrics';

import { TextContent } from '~/components/TextContent';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

export function NowView(): JSX.Element {
  return (
    <div className={css.container}>
      <Header />
      <TextContent />
      <Metrics />
      NOW
      <Footer />
    </div>
  );
}
