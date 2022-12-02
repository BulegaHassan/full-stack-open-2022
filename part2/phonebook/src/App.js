import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    axios
    .get("http://localhost:3001/persons")
    .then((response) => {
      setPersons(response.data);
    })
  },[]);
  const addName = (e) => {
    e.preventDefault();
    const date = Date.now();
    // console.log("date", date);
    const newPerson = {
      name: newName,
      number: newNumber,
      id: date,
    };
    const index = persons.find((person) => person.name === newPerson.name);
   
    if (index) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }
axios.post(`http://localhost:3001/persons`,newPerson).then(response => {
 setPersons(persons.concat(newPerson));
 setNewName("");
 setNewNumber("");
} )
   
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };
  const handleFilterChange = (e) => {
    setNameFilter(e.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange} />
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} />
    </div>
  );
};

export default App;
