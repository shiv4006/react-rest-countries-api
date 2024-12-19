/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import styles from './SearchFilter.module.css'
import { ThemeContext } from '../ContextAPI';

export const SearchFilter = ({ name, handleInputChange, region, handleSelectChange }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // console.log(name, region);

  return (
    <div className={styles.container}>
      <div className={`${styles['input-container']} ${theme === 'dark' ? styles.active : ''}`}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className={`${styles.input} ${theme === 'dark' ? styles.active : ''}`}
          id="cntryName"
          name="cntryName"
          type="text"
          placeholder="Search for a country..."
          value={name}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <select
        name="region"
        id="region"
        className={`${styles.select} ${theme === 'dark' ? styles.active : ''}`}
        value={region}
        onChange={handleSelectChange}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

    </div>

  );
}