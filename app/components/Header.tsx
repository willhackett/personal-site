import { Logo } from './Logo';

import * as css from './Header.css';

export function Header(): JSX.Element {
  return (
    <div className={css.root}>
      <div>
        <Logo />
      </div>
      <div className={css.links}></div>
    </div>
  );
}
