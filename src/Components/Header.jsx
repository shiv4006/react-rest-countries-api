import { useContext } from 'react';
import '../index.css';
import styles from './Header.module.css';
import { ThemeContext } from '../ContextAPI';
import { NavLink } from 'react-router';

export const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleModeChange = () => {
    toggleTheme();
  }

  return (
    <div className={`${styles.header} ${theme === 'dark' ? styles.active : ''}`}>
      <span>
        <NavLink to={`/`} style={{all: "unset", cursor: "pointer"}}>
          Where in the world?
        </NavLink>
      </span>
      <button className={`${styles[theme === "light" ? "active" : ""]}`} onClick={() => handleModeChange()}>
        <i className="fa-solid fa-moon"></i>
        <span>Dark Mode</span>
      </button>

      <button className={`${styles[theme === "dark" ? "active" : ""]}`} onClick={() => handleModeChange()}>
        <i className="fa-regular fa-sun"></i>
        <span>Light Mode</span>
      </button>

    </div>
  );

}