const Filter = ({ nameFilter, handleFilterChange }) => {
  return (
    <div>
      find countries{" "}
      <input value={nameFilter} onChange={handleFilterChange} />
    </div>
  );
};
export default Filter;
