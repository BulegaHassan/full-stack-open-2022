const Country = ({ common, handleShow }) => {
  return (
    <p>
      {" "}
      {common}{" "}
      <button type='button' onClick={handleShow}>
        show
      </button>
    </p>
  );
};

export const CountryDetails = ({ common, area, capital, languages, img }) => {
  const langs = Object.values(languages);
  const list = langs.map((lang) => <li key={lang}>{lang}</li>);

  return (
    <div>
      <h2>{common}</h2>
      <p>capital {capital}</p>
      <p>area {area}</p>
      <h4>languages:</h4>
      <ul>{list}</ul>
      <img src={img} alt={common} />
    </div>
  );
};

const Countries = ({ nameFilter, selectedCountries, handleShow }) => {
  return nameFilter === ""
    ? []
    : selectedCountries.length > 10
    ? "Too many matches, specify another filter"
    : selectedCountries.length > 1 && selectedCountries.length < 10
    ? selectedCountries.map((country) => (
        <Country
          common={country.name.common}
          key={country.name.common}
          handleShow={() => handleShow(country)}
        />
      ))
    : selectedCountries.map((country) => (
        <CountryDetails
          common={country.name.common}
          area={country.area}
          capital={country.capital}
          languages={country.languages}
          img={country.flags.png}
          key={country.name.common}
        />
      ));
};
export default Countries;
