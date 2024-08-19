import { Logo } from '~/components/Logo';
import * as style from './HomeView.css';
import { Metrics } from '~/components/Metrics';

export function HomeView(): JSX.Element {
  return (
    <div className={style.container}>
      <Logo />
      <Metrics />
    </div>
  );
}
