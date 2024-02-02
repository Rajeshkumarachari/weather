import "./App.css";
import { IoSearchOutline } from "react-icons/io5";
import newran from "../src/images/natute.jpeg";
import humiditylogo from "../src/images/humiditylogo.jpeg";
import windicon from "../src/images/wind icon.png";

import { useState } from "react";

const WeatherDetails = ({
  icon,
  temp,
  city,
  country,
  lat,
  log,
  humidity,
  wind,
}) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="weather_photo" />
      </div>
      <div className="temp"> {temp} °C</div>
      <div className="location">{city} </div>
      <div className="country">{country} </div>
      <div className="cord">
        <div>
          <span className="let"> Latitude </span>
          <span>{lat} </span>
        </div>
        <div>
          <span className="log"> Longitude </span>
          <span>{log} </span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humiditylogo} alt="humidity" className="icon" />
          <div className="data">
            <div className="humidity-percent">{humidity} %</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windicon} alt="wind" className="icon" />
          <div className="data">
            <div className="humidity-percent"> {wind} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  const [text, setText] = useState("Chennai");
  const [icon, setIcon] = useState(newran);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("India");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  let api_key = `f6321993eb65ee5d9513b630f0c720d3`;

  const search = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${api_key} &units=Metric`;
    try {
    } catch (error) {
      console.log("An error occurred", error.message);
    } finally {
    }
  };
  const handleCity = (e) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className=" container">
      <div className="input-container">
        <input
          type="text"
          value={text}
          className="cityInput"
          onChange={handleCity}
          placeholder="Search City"
          onKeyDown={handleKeyDown}
        />
        <div className="search-icon" onClick={() => search()}>
          <IoSearchOutline className="searchimage" />
        </div>
      </div>
      <WeatherDetails
        icon={icon}
        temp={temp}
        city={city}
        country={country}
        lat={lat}
        log={log}
        humidity={humidity}
        wind={wind}
      />
      <p className="copy">
        Designed by <span>K Rajesh</span>
      </p>
    </div>
  );
}

export default App;
