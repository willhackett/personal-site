import * as css from './Logo.css';

export function Logo(): JSX.Element {
  return (
    <div>
      <a href="/" className={css.a}>
        <h1 className={css.root}>
          Will Hackett<span className={css.dot}>.</span>
        </h1>
      </a>
    </div>
  );
}
