import type { coverProps } from './cover';
import type { iconProps } from './icon';

interface recentProps {
  id: string;
  icon: iconProps;
  cover: coverProps;
  name: string;
  last_update_time: string;
}

export type { recentProps };
