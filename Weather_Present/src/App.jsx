import { useState } from 'react';
import MainBody from '../components/body';
import SearchBar from '../components/Inputsection';
import clear from '../assets/clear.png';
import cloud from '../assets/clouds.png';
import rain from '../assets/rain.png';
import mist from '../assets/mist.png';
import snow from '../assets/snow.png';
import drizzle from '../assets/drizzle.png';
import './App.css'

function App() {

  const [weatherImg, setweatherImg] = useState(clear);

  const apiKey = "a7e0087ae4c732c93ef22f5a730c6956";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

  const [W_data, setW_Data] = useState('');

  async function handleSearch(city){
    const response = await fetch(apiUrl+`&q=${city}`+`&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    const newData = { temp: data.main.temp,
      city: data.name,
      humidity: data.main.humidity,
      wind: data.wind.speed, };

      setW_Data(newData);

    if(data.weather[0].main == "Clouds"){
      setweatherImg(cloud);
    }
    else if(data.weather[0].main == "Rain"){
      setweatherImg(rain);
    }
    else if(data.weather[0].main == "Mist"){
      setweatherImg(mist);
    }
    else if(data.weather[0].main == "Drizzle"){
      setweatherImg(drizzle);
    }
    else if(data.weather[0].main == "Snow"){
      setweatherImg(snow);
    }
  };


  return (
     <div className="card">
      <SearchBar onSearch ={handleSearch} />
      {Object.keys(W_data) != '' &&   <MainBody dataPrint = {W_data} imgProvide = {weatherImg}  />}
     </div>
    
  )
}

export default App
