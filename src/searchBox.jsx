import "./searchBox.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from "react";

function SearchBox(){
  const [city, setCity] = useState("");

  let changeCity = function(event){
    setCity(event.target.value);
  }
  
  let API = "https://api.openweathermap.org/data/2.5/weather";
  let key = "28cbc82634560a6cc40128e81512fc09"


  let getWeather = async function(){
    let response = await fetch(`${API}?q=${city}&appid=${key}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      temp: jsonResponse.main.temp,
      temp_min: jsonResponse.main.temp_min,
      temp_max: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feels_like: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description
    }
    console.log(result);
  }

  let submitForm = function(event){
    event.preventDefault();
    setCity("");
    getWeather();
  }

  return (
    <div className="SearchBox">
        <h1>Search For Weather</h1>
        <form onSubmit={submitForm} >
            <TextField id="outlined-basic" label="City Name" variant="outlined" onChange={changeCity} value={city}></TextField>
            <br /> <br />
            <Button variant="contained" type="Submit" >Search</Button>
            <br /> <br />
        </form>
    </div>
  );
}

export default SearchBox;