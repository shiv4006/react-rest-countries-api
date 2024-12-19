/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import styles from './CountryCard.module.css';
import { ThemeContext } from '../ContextAPI';
import { NavLink } from 'react-router';

export const CountryCard = ({ currCountry }) => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <li className={`${styles.card} ${theme === 'dark' ? styles.active : ''}`}>
      <NavLink to={`/${currCountry.name.common}`} style={{all: "unset", cursor: "pointer"}}>

        <div className={styles['img-container']}>
          <img src={currCountry.flags.png} alt="Country Picture" />
        </div>

        <div className={styles.content}>
          <p className={styles.name}>{currCountry.name.common}</p>
          <p className={styles.population}><strong>Population: </strong>{currCountry.population}</p>
          <p className={styles.region}><strong>Region: </strong>{currCountry.region}</p>
          <p className={styles.capital}><strong>Capital: </strong>{currCountry.capital}</p>

        </div>

      </NavLink>

    </li>

  );
}