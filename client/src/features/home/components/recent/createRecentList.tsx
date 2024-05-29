import type { noteProps } from '@features/home/types/note';
import type { recentProps } from '@features/home/types/recent';

function createRecentList(notes: noteProps[]) {
  const recentList: recentProps[] = [];

  notes.forEach((note) => {
    const { id, icon, cover, name, last_update_time } = note;
    recentList.push({ id, icon, cover, name, last_update_time });

    if (note.subnotes) {
      recentList.push(...createRecentList(note.subnotes));
    }
  });

  return recentList;
}

export default createRecentList;
