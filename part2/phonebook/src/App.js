import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 1, phone: "22-99-890098" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const addName = (e) => {
    e.preventDefault();
    const date = Date.now();
    console.log("date", date);
    const newPerson = {
      id: date,
      name: newName,
      phone: newNumber,
    };

    const index = persons.find((person) => person.name === newPerson.name);

    // console.log("index", index);
    if (index) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };
  const filterNames = () => {
    return nameFilter === ""
      ? persons.map((person) => {
          return (
            <p key={person.name}>
              {" "}
              {person.name} {person.phone}
            </p>
          );
        })
      : persons
          .filter((person) => person.name.includes(nameFilter.toLowerCase()))
          .map((person) => {
            return (
              <p key={person.name}>
                {person.name} {person.phone}
              </p>
            );
          });
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
      <div>
        filter shown with{" "}
        <input value={nameFilter} onChange={handleFilterChange} />
      </div>
      <form onSubmit={addName}>
        <h2>Add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterNames()}
    </div>
  );
};

export default App;
