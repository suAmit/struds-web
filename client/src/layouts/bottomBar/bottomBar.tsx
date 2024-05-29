import style from './bottomBar.module.css';
import HomeIcon from './icons/home';
import AddIcon from './icons/add';
import SearchIcon from './icons/search';
import TabIcon from './icons/tab';
import ProfileIcon from './icons/profile';
import SideBar from '../sideBar/sideBar';
import styleSideBar from '../sideBar/sideBar.module.css';
import { useState } from 'react';

function BottomBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {sidebarOpen && (
        <div onClick={toggleSidebar} className={styleSideBar.sideBarOuter}>
          <SideBar />
        </div>
      )}
      <div className={style.bottomBar}>
        <div className={style.bottomContainer}>
          <div className={style.iconDiv}>
            <div className={style.icon}>
              <HomeIcon />
            </div>
          </div>
          <div className={style.iconDiv}>
            <div className={style.icon}>
              <AddIcon />
            </div>
          </div>
          <div className={style.iconDiv}>
            <div className={style.icon}>
              <SearchIcon />
            </div>
          </div>
          <div className={style.iconDiv}>
            <div className={style.icon}>
              <TabIcon />
            </div>
          </div>
          <div className={style.iconDiv}>
            <div onClick={toggleSidebar} className={style.icon}>
              <ProfileIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
