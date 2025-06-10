import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function InfoBox({ info }){
  let SunnyDay = "https://images.unsplash.com/photo-1609595781367-fd69dc2a3442?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let ColdDay = "https://images.unsplash.com/photo-1705331470508-06125e27adff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RainyDay = "https://images.unsplash.com/photo-1623567932970-576132e5d056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D";

  return(
    <>
    <h1>{info.city}</h1>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {  info.humidity > 80 ? RainyDay : (info.temp > 15 ? SunnyDay : ColdDay) }
          alt="sunny day"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.weather}
          </Typography>
          { info.humidity > 80 ? <ThunderstormIcon></ThunderstormIcon> : ( info.temp > 15 ? <SunnyIcon></SunnyIcon> : <AcUnitIcon></AcUnitIcon>  ) }
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Temperature Maximimum = {info.temp_max}&deg;C</p>
            <p>Temperature Minimum = {info.temp_min}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Weather Feels Like = {info.feels_like}&deg;c</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}

export default InfoBox;