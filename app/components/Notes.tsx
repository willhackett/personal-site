import { Note } from './Note/Note';
import { useHomeContext } from '~/contexts/home';

import * as css from './Notes.css';

export function Notes(): JSX.Element {
  const { notes } = useHomeContext();

  return (
    <div className={css.root}>
      <h2 className={css.heading}>Notes</h2>
      <div>
        {notes.map((note) => (
          <Note key={note.permalink} note={note} />
        ))}
      </div>
    </div>
  );
}
