const CountryDetails = ({ common, area, capital, languages, img }) => {
  const langs = Object.values(languages);
  const list = langs.map((lang) => <li key={lang}>{lang}</li>);

  return (
    <div>
      <h2>{common}</h2>
      <p>capital {capital}</p>
      <p>area {area}</p>
      <h4>languages:</h4>
      <ul>{list}</ul>
      <img src={img} alt={common} />
    </div>
  );
};

export default CountryDetails;
