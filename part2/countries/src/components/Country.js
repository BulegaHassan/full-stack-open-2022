const Country = ({ common, handleShow }) => {
  return (
    <p>
      {" "}
      {common}{" "}
      <button type='button' onClick={handleShow}>
        show
      </button>
    </p>
  );
};

export default Country;
