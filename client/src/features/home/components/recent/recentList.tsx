import type { noteProps } from '@features/home/types/note';
import createRecentList from './createRecentList';
import RecentCard from './recentCard';
import style from './recentList.module.css';

interface NotesProps {
  notes: noteProps[];
}

function RecentList({ notes }: NotesProps) {
  const recentList = createRecentList(notes);
  return (
    <div className={style.recentList}>
      {recentList.map((recent) => (
        <RecentCard key={recent.id} recent={recent} />
      ))}
    </div>
  );
}

export default RecentList;
