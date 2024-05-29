import type { coverProps } from './cover';
import type { iconProps } from './icon';

interface noteProps {
  index: number;
  id: string;
  last_update_time: string;
  name: string;
  cover: coverProps;
  icon: iconProps;
  archived: boolean;
  subnotes?: noteProps[];
}

export type { noteProps };
