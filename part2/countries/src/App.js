import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [capital, setCapital] = useState("");

  //countries
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  // weather
  const weatherAPIKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&APPID=${weatherAPIKey}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((err) => console.log(err));
  }, [capital, weatherAPIKey]);

  const handleShow = (country) => {
    const countryArray = [];
    countryArray.push(country);
    setSelectedCountries(countryArray);
    setCapital(countryArray.map((country) => country.capital));
    console.log("capital", capital);
  };

  const handleFilterChange = (e) => {
    setNameFilter(e.target.value);
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(nameFilter.toLowerCase())
    );

    setSelectedCountries(filteredCountries);
    setCapital(filteredCountries.map((country) => country.capital));
  };

  return (
    <div>
      <Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange} />

      <Countries
        nameFilter={nameFilter}
        selectedCountries={selectedCountries}
        handleShow={handleShow}
        weatherData={weatherData}
      />
    </div>
  );
};

export default App;
