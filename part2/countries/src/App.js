import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newName, setNewName] = useState("");
  
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    axios.get(" https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);
  

 
  const handleFilterChange = (e) => {
    setNameFilter(e.target.value);
  };
  return (
    <div>      
      <Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange} />
      
      <Countries countries={countries} nameFilter={nameFilter} />
    </div>
  );
};

export default App;
