import type { recentProps } from '@features/home/types/recent';
import style from './recentCard.module.css';

interface NoteProps {
  recent: recentProps;
}

function RecentCard({ recent }: NoteProps) {
  return (
    <div className={style.recentCard}>
      <div
        className={style.recentCover}
        style={{ background: recent.cover.colorhex }}
      ></div>
      <div className={style.recentIcon}>{recent.icon.emoji}</div>
      <div className={style.recentTitle}>{recent.name}</div>
    </div>
  );
}

export default RecentCard;
