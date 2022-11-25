const Country = ({ common }) => {
  return <p key={common}> {common}</p>;
};
const CountryDetails = ({ common, area, capital, languages, img }) => {
  const langs = Object.values(languages);
  const list = langs.map((lang) => <li key={lang}>{lang}</li>);

  return (
    <div key={common}>
      <h2>{common}</h2>
      <p>capital {capital}</p>
      <p>area {area}</p>
      <h4>languages:</h4>
      <ul>{list}</ul>
      <img src={img} alt={common} />
    </div>
  );
};

const Countries = ({ countries, nameFilter }) => {
  // console.log("length",countries.length)
  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(nameFilter.toLowerCase())
    )
    .map((country) => country);
  //  console.log('filtered countries:',filteredCountries);
  return nameFilter === ""
    ? []
    : filteredCountries.length > 10
    ? "Too many matches, specify another filter"
    : filteredCountries.length > 1 && filteredCountries.length < 10
    ? filteredCountries.map((country) => (
        <Country common={country.name.common} />
      ))
    : filteredCountries.map((country) => (
        <CountryDetails
          common={country.name.common}
          area={country.area}
          capital={country.capital}
          languages={country.languages}
          img={country.flags.png}
        />
      ));
};
export default Countries;
