import * as css from './Footer.css';

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.root}>
      <p>&copy; Will Hackett. {currentYear}.</p>
      <p>
        <a
          href="https://notes.willhackett.com/my-personal-site/"
          target="_blank"
          rel="noopener noreferrer"
          className={css.a}
        >
          Learn how I made this site
        </a>
      </p>
    </footer>
  );
}
