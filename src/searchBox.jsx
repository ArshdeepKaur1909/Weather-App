import "./searchBox.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from "react";

function SearchBox(){
  const [city, setCity] = useState("");

  let changeCity = function(event){
    setCity(event.target.value);
  }
  
  let submitForm = function(event){
    event.preventDefault();
    setCity("");
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