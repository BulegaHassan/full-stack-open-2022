const WeatherInfo = ({ weatherData }) => {
  const { weather } = weatherData;
  const iconList = weather.map((item) => item.icon);
  const weatherDesc = weather.map((item) => item.description);
  // console.log('WD: ',weatherData);
  return (
    <>
      <h2>Weather in {weatherData.name}</h2>
      <p>temperature {weatherData.main.temp} Celcius</p>
      <img
        src={`https://openweathermap.org/img/wn/${iconList}@2x.png`}
        alt={weatherDesc}
      />
      <p>wind {weatherData.wind.speed} m/s</p>
    </>
  );
};

export default WeatherInfo;
