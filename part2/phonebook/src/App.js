import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axiosService from "./services/persons";
import Notification from "./components/Notification";
import "./index.css";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(null);

  useEffect(() => {
    axiosService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const addName = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
      // id: persons.length + 1,
      id: Date.now(),
    };
    const personExists = persons.find(
      (person) => person.name === newPerson.name
    );

    if (
      personExists &&
      window.confirm(
        `${personExists.name} is already added to the phonebook, replace the old number with a new one?`
      )
    ) {
      const person = persons.find((person) => person.id === personExists.id);
      const changedPerson = { ...person, number: newNumber };
      axiosService
        .update(personExists.id, changedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== personExists.id ? person : returnedPerson
            )
          );
          setNewName("");
          setNewNumber("");
        })
        .then(() => {
          setNotificationMessage(`Updated ${person.name}`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
        });
    }
    if (!personExists && newName && newNumber) {
      axiosService
        .create(newPerson)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
        })
        .then(() => {
          setNotificationMessage(`Added ${newPerson.name}`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
        });
    }
    setNewName("");
    setNewNumber("");
  };
  const deleteName = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      axiosService.eliminate(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
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
      <Notification message={notificationMessage} />

      <Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange} />
      <PersonForm
        isActive={isActive}
        handleClick={handleClick}
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        nameFilter={nameFilter}
        deleteName={deleteName}
      />
    </div>
  );
};

export default App;
