import { Logo } from './Logo';

import * as css from './Header.css';
import { Link } from '@remix-run/react';

export function Header(): JSX.Element {
  return (
    <div className={css.root}>
      <div>
        <Logo />
      </div>
      <div className={css.links}>
        <Link to="/now" className={css.a}>
          Now
        </Link>
        <Link to="/contact" className={css.a}>
          Contact
        </Link>
      </div>
    </div>
  );
}
