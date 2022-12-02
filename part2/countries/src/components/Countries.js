import Country from "./Country";
import WeatherInfo from "./WeatherInfo";
 import CountryDetails from "./CountryDetails";

const Countries = ({
  nameFilter,
  selectedCountries,
  handleShow,
  weatherData,
}) => {
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
        <>
          <CountryDetails
            common={country.name.common}
            area={country.area}
            capital={country.capital}
            languages={country.languages}
            img={country.flags.png}
            key={country.name.common}
          />
          <WeatherInfo weatherData={weatherData} key={weatherData.id} />
        </>
      ));
};
export default Countries;
