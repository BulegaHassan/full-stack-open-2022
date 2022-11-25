const Person = ({ name, phone }) => {
  return (
    <p key={name}>
      {" "}
      {name} {phone}
    </p>
  );
};

const Persons = ({ persons, nameFilter }) => {
  return nameFilter === ""
    ? persons.map((person) => {
        return <Person name={person.name} phone={person.phone} />;
      })
    : persons
        .filter((person) => person.name.includes(nameFilter.toLowerCase()))
        .map((person) => {
          return <Person name={person.name} phone={person.phone} />;
        });
};
export default Persons;
