import '@styles/body.css';
import '@styles/themes.css';
import '@styles/typography.css';
import Header from '@layouts/header/header';
import RecentList from '@features/home/components/recent/recentList';
import NoteList from '@features/home/components/note/noteList';
import notebook from '../../../data/notebooks.json';
import BottomBar from '@layouts/bottomBar/bottomBar';

function Home() {
  const notes = notebook[1].notes;
  return (
    <div>
      <Header />
      <div>
        <div>
          <div>RECENT</div>
          <RecentList notes={notes} />
        </div>
        <div>
          <div>NOTES</div>
          <NoteList notes={notes} />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default Home;
