/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router";
import styles from './ActualContent.module.css';
import { CountryCard } from './CountryCard'
import { useEffect, useState } from "react";

export const ActualContent = ({ name, handleInputChange, region, handleSelectChange }) => {

  const countryList = useLoaderData(); // loding data from API
  // console.log(countryList);

  const [filteredData, setFilteredData] = useState([]); // State for filtered data

  useEffect(() => {
    if (countryList) { // Check if countryList is not undefined
      const derivedData = countryList.filter((country) => {
        const matchesName = name
          ? country.name.common.toLowerCase().includes(name.toLowerCase())
          : true;
        const matchesRegion = region ? country.region === region : true;

        return matchesName && matchesRegion;
      });

      setFilteredData(derivedData);
    }
  }, [name, region, countryList]);


  return (
    <ul className={styles['country-container']}>
      {
        filteredData && filteredData.length > 0 ? (
          filteredData.map((currCountry) => (
            <CountryCard key={currCountry.name.common} currCountry={currCountry} />
          ))
        ) : (
          <></>
        )}
    </ul>

  );
}