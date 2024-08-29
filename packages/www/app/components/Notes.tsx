import { useHomeContext } from '~/contexts/home';
import { Note } from './Note/Note';

import { Await } from '@remix-run/react';
import * as css from './Notes.css';

export function Notes(): JSX.Element {
  const { notes } = useHomeContext();

  return (
    <div className={css.root}>
      <h2 className={css.heading}>Notes</h2>
      <div>
        <Await resolve={notes}>
          {(resolvedNotes) => (
            <>
              {resolvedNotes.map((note) => (
                <Note key={note.permalink} note={note} />
              ))}
            </>
          )}
        </Await>
      </div>
    </div>
  );
}
