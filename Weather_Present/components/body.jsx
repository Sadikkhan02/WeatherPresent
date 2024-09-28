import wind from '../assets/wind.png';
import humidity from '../assets/humidity.png';

const MainBody = ({dataPrint, imgProvide})=>{

  return (
    <div className="weather hidden ">
            <img src= {imgProvide} className="weather-icon"/>
            <h1 className="temp">{dataPrint.temp}°C</h1>
            <h2 className="city">{dataPrint.city}</h2>
            <div className="details">
                <div className="col">
                    <img src={humidity}/>
                    <div>
                        <p className="humidity">{dataPrint.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="col">
                <img src={wind}/>
                    <div>
                        <p className="wind">{dataPrint.wind}km/h</p>
                        <p>Wind</p>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default MainBody;