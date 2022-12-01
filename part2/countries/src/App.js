import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState({});
  

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      // console.log('countries',countries)
    });
  }, []);

  

  const handleShow = (country) => {
    const countryArray = [];
    countryArray.push(country);
    setSelectedCountries(countryArray);
  };

  const handleFilterChange = (e) => {
    setNameFilter(e.target.value);
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(nameFilter.toLowerCase())
    );    
    setSelectedCountries(filteredCountries);
  };

  return (
    <div>
      <Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange} />

      <Countries
        nameFilter={nameFilter}
        selectedCountries={selectedCountries}
        handleShow={handleShow}
      />
    </div>
  );
};

export default App;
