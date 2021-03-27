import React, { useState } from "react";
import Select from "react-select";
import options from "../context/countries";

export const MainPage = () => {
  const [todayCase, setTodayCase] = useState("");
  const [cities, setCities] = useState([]);
  var cityNames = [];
  const [city, setCity] = useState("");
  const [hotels, setHotels] = useState([]);
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState("");

  const SearchCovid = () => {
    // GET request using fetch with error handling
    fetch(
      "https://corona.lmao.ninja/v2/countries/".concat(
        country + "?yesterday=true"
      )
    )
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        setTodayCase(data.todayCases);
        searchCity();
      })
      .catch((error) => {
        setError(error.toString());
        console.error("There was an error!", error);
      });
  };

  const handleChange = (e) => {
    setCountry(e.value);
  };

  const searchCity = () => {
    fetch(
      "https://hotels4.p.rapidapi.com/locations/search?query=".concat(country),
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "61a532192dmshe4a97d8c6f89d54p10fee6jsn704ac1d1b9ac",
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
        },
      }
    )
      .then(async (response) => {
        const data = await response.json();
        setCities(data.suggestions[0].entities);
       
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const searchHotel = () => {
    fetch(
      "https://hotels4.p.rapidapi.com/locations/search?query=".concat(city),
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "61a532192dmshe4a97d8c6f89d54p10fee6jsn704ac1d1b9ac",
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
        },
      }
    )
      .then(async (response) => {
        const data = await response.json();
        setHotels(data.suggestions[1].entities);
        hotels.map((hotel, index) => {
          console.log(index, hotel.name);
        });
        searchWeather();
      })
      .catch((err) => {
        console.error(err);
      });
  };


  const searchWeather = ()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city + "&units=metric&appid=43b811164160ccdbae3ecc18fe414287"), 
  {
	"method": "GET",
})
.then(async(response) => {
  const data = await response.json();
  setWeather(data.main.temp)
	console.log(weather);
})
.catch(err => {
	console.error(err);
});
  }

  

  const handleCity = (index) => {
   setCity(cities[index].name)
   console.log(city)
  };

  return (
    <>
      <Select options={options} onChange={handleChange.bind(this)} />
     
      <button onClick={SearchCovid}>Search</button>
      <h1>Today's Case: {todayCase}</h1>

        <div>
          {cities.map((city,index)=>
          <span key ={city.name}>
            <div onClick={()=>handleCity(index)}>
              {city.name}
            </div>
          </span>
          )}
        </div>
        <button onClick={searchHotel}>SearchHotel</button>
        <div>
          {hotels.map((hotel,index)=>
          <span key ={hotel.name}>
            <div>
              {hotel.name}
            </div>
          </span>
          )}
        </div>
        <div>
          temp in {city}: {weather} celcius
        </div>

   
    </>
  );
};

export default MainPage;
