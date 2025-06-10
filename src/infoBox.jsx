import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function InfoBox({ info }){
    return(
    <>
    <h1>{info.city}</h1>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1609595781367-fd69dc2a3442?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="sunny day"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.weather}
          </Typography>
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