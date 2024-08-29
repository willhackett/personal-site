import * as css from './Footer.css';

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.root}>
      <p>&copy; Will Hackett. {currentYear}.</p>
    </footer>
  );
}
