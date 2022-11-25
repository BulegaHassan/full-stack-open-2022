const Person = ({ name, number }) => {
  return (
    <p key={name}>
      {" "}
      {name} {number}
    </p>
  );
};

const Persons = ({ persons, nameFilter }) => {
  return nameFilter === ""
    ? persons.map((person) => {
        return <Person name={person.name} number={person.number} />;
      })
    : persons
        .filter((person) => person.name.includes(nameFilter.toLowerCase()))
        .map((person) => {
          return <Person name={person.name} number={person.number} />;
        });
};
export default Persons;
