/* eslint-disable no-unused-vars */
import '../index.css';
import { SearchFilter } from '../Components/SearchFilter';
import { ActualContent } from '../Components/ActualContent';
import styles from './Home.module.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../ContextAPI';

export const Home = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  // For search and filter by region fuctionality
  const [name, setName] = useState("");
  const [region, setResion] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  const handleSelectChange = (e) => {
    setResion(e.target.value);
  }

  
  return (
    <div className={`${styles.container} ${theme === 'dark' ? styles.active : ""}`}>
      <SearchFilter name={name} handleInputChange={handleInputChange} region={region} handleSelectChange={handleSelectChange} />
      <ActualContent name={name} handleInputChange={handleInputChange} region={region} handleSelectChange={handleSelectChange} />
    </div>
  );
}