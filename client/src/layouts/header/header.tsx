import { useState } from 'react';
import style from './header.module.css';

function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerTitle}>
          <span>🫠 Header</span>
          <button onClick={toggleTheme}>Theme</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
