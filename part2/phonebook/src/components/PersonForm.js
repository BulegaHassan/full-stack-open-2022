const PersonForm = ({
  handleClick,
  isActive,
  addName,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addName}>
      <h2>Add a new</h2>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button
          type='submit'
          style={{ backgroundColor: isActive ? "#4390FA" : "" }}
          onClick={() => handleClick()}
        >
          add
        </button>
      </div>
    </form>
  );
};
export default PersonForm