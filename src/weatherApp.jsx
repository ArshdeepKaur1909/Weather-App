import SearchBox from "./searchBox";
import InfoBox from "./infoBox.jsx";
import {useState} from "react"

function WeatherApp(){
  const [weatherInfo, setWeatherInfo] = useState({
      city: "Chandigarh",
      temp: 1,
      temp_min: 1,
      temp_max: 1,
      humidity: 1,
      feels_like: 1,
      weather: "Sunny"
    });
  
  let updateWeatherInfo = function(newInfo){
    setWeatherInfo(newInfo);
  }

  return(
    <>
      <SearchBox updateWeather={updateWeatherInfo} ></SearchBox>
      <InfoBox info={weatherInfo} ></InfoBox>
    </>
  );
}

export default WeatherApp;