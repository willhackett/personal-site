import { NoteContent } from '~/gql/graphql';
import { getNoteUri } from '~/util/uri';

import * as css from './Note.css';

type NoteProps = {
  note: NoteContent;
};

export function Note({ note }: NoteProps): JSX.Element {
  return (
    <article className={css.root}>
      <a href={getNoteUri(note.permalink)} className={css.a}>
        <h3 className={css.title}>{note.title}</h3>
        <time>{note.date}</time>
      </a>
      <p>{note.summary}</p>
    </article>
  );
}
