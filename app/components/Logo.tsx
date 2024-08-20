import * as css from './Logo.css';

export function Logo(): JSX.Element {
  return (
    <div>
      <h1 className={css.root}>
        Will Hackett<span className={css.dot}>.</span>
      </h1>
    </div>
  );
}
