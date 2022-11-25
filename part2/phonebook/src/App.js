import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");
  const addName = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
    };

    const index = persons.find((person) => person.name === newPerson.name);

    // console.log("index", index);
    if (index) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(newPerson));
    setNewName("");
  };
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name} </p>
      ))}
    </div>
  );
};

export default App;
