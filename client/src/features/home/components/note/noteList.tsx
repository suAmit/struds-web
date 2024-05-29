import type { noteProps } from '@features/home/types/note';
import NoteCard from './noteCard';

interface NotesProps {
  notes: noteProps[];
}

function NoteList({ notes }: NotesProps) {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} indent={0} />
      ))}
    </div>
  );
}

export default NoteList;
