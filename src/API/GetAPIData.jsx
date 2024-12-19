export const getAPIData = async () => {
  try {
    // const response = await fetch("https://restcountries.com/v3.1/region/asia");
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    // console.log(data);
    return data;

  } catch (error) {
    console.log(error.message);
  }
}

export const getAPIDataName = async ({ params }) => {
  const countryName = params.countryName;

  // console.log(countryName);
  const isCode = countryName.length <= 3;

  const url = isCode ? `https://restcountries.com/v3.1/alpha/${countryName}` : `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error.message);
  }
}