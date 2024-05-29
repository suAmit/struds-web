import { useState } from 'react';
import type { noteProps } from '@features/home/types/note';
import ArrowDownIcon from '../icons/arrowDown.icon';
import ArrowRightIcon from '../icons/arrowRight.icon';
import MoreIcon from '../icons/more.icon';
import AddIcon from '../icons/add.icon';
import style from './note.module.css';

interface NoteProps {
  note: noteProps;
  indent: number;
}

function NoteCard({ note, indent }: NoteProps) {
  const [viewSubnotes, setViewSubnotes] = useState<boolean>(false);

  const toggleSubnotes = () => {
    setViewSubnotes(!viewSubnotes);
  };

  return (
    <div style={{ marginLeft: indent * 20 }}>
      <div className={style.noteCard}>
        {note.subnotes && (
          <div onClick={toggleSubnotes} className={style.arrow}>
            {viewSubnotes ? <ArrowRightIcon /> : <ArrowDownIcon />}
          </div>
        )}
        <div className={style.noteTitle}>
          {note.icon.emoji + ' ' + note.name}
        </div>
        <div className={style.more}>
          <MoreIcon />
        </div>
        <div className={style.add}>
          <AddIcon />
        </div>
      </div>
      {note.subnotes && (
        <div className={style.subnote}>
          <div
            className={`${viewSubnotes ? style.subnoteExpanded : style.subnoteCollapsed}`}
          >
            {note.subnotes.map((subnote) => (
              <NoteCard key={subnote.id} note={subnote} indent={indent + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteCard;
