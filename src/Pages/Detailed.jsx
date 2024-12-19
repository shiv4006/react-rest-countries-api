/* eslint-disable no-unused-vars */
import { NavLink, useLoaderData, useNavigate, useParams } from 'react-router';
import { ThemeContext } from '../ContextAPI';
import { useContext } from 'react';
import styles from './Detailed.module.css';
import '../index.css';

export const Detailed = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const countryData = useLoaderData(); // getting data by name or country code through API
  const data = countryData?.[0]; // getting values of the data or Object.values(countryData)
  // console.log(data);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);  // goind back to previous page when back button on the screen is tapped
  }

  if (!data) {
    return (
      <div className={`${styles.loading} ${theme === 'dark' ? styles.active : ''}`}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={`${styles.main} ${theme === 'dark' ? styles.active : ''}`}>
      <button onClick={goBack} className={`${styles.back} ${theme === 'dark' ? styles.active : ''}`}>
        <i className="fa-solid fa-arrow-left-long"></i>
        Back
      </button>

      <div className={`${styles.container} ${theme === 'dark' ? styles.active : ''}`}>
        <div className={`${styles.card} ${theme === 'dark' ? styles.active : ''}`}>
          <div className={`${styles['image-container']} ${theme === 'dark' ? styles.active : ''}`}>
            <img src={data.flags.png} alt="country picture" />
          </div>
          <div className={styles['content']}>

            <div className={styles.heading}>
              <h1>{data.name.common}</h1>
            </div>

            <div className={styles.information}>
              <div className={styles['left-details']}>
                <p><strong>Native Name: </strong>{Object.values(data.name.nativeName)[0].common}</p>
                <p><strong>Population: </strong>{data.population}</p>
                <p><strong>Region: </strong>{data.region}</p>
                <p><strong>Sub Region: </strong>{data.subregion}</p>
                <p><strong>Capital: </strong>{data.capital.join(", ")}</p>
              </div>

              <div className={styles['right-details']}>
                <p><strong>Top Level Domain: </strong>{data.tld.join(", ")}</p>
                <p><strong>Currencies: </strong>{getCurrencies(data.currencies)}</p>
                <p><strong>Languages: </strong>{Object.values(data.languages)}</p>
              </div>
            </div>

            <div className={styles['border-countries']}>
              <strong>Border Countries: </strong>
              <ul className={styles['border-countries-list']}>
                {
                  data.borders && data.borders.map((neighbour) => {
                    // return <BorderCountries key={neighbour} neighbour={neighbour} />;
                    return (
                      <li key={neighbour}>
                        <NavLink to={`/${neighbour}`} className={`${styles['list-item']} ${theme === 'dark' ? styles.active : ''}`}>{neighbour}</NavLink>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const getCurrencies = (currencies) => {
  return Object.values(currencies)
    .map((curr) => curr.name)
    .join(", ");
}