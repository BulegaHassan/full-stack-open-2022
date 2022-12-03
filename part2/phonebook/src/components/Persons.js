const Person = ({ name, number, deleteName, id }) => {
  return (
    <p>
      {" "}
      {name} {number}{" "}
      <button
        onClick={() => {
          deleteName(id, name);
        }}
      >
        delete
      </button>
    </p>
  );
};

const Persons = ({
  persons,
  nameFilter,
  deleteName,
  isActive,
  handleClick,
}) => {
  return nameFilter === ""
    ? persons.map((person) => {
        return (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            number={person.number}
            deleteName={deleteName}
          />
        );
      })
    : persons
        .filter((person) => person.name.includes(nameFilter.toLowerCase()))
        .map((person) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              number={person.number}
              deleteName={deleteName}
            />
          );
        });
};
export default Persons;
