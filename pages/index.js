import { useEffect, useState } from "react";
import Detail from "../components/Detail";
import MetaHead from "../components/MetaHead";
import WeatherInfo from "../components/WeatherInfo";

export default function Home() {
  const [API, setAPI] = useState("a38b34b95d89cba81c270becc66f79d2");
  const [city, setCity] = useState("oslo");
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [weatherDetails, setWeatherDetails] = useState({
    temp: "",
    humid: "",
    cityName: "",
    clouds: "",
    windSpeed: "",
    desc: "",
    icon: "",
    feel: "",
  });
  const [bookmarks, setBookmarks] = useState({
    temp: "",
    city: "",
    icon: "",
  });
  const [bookmarked, setBookmarked] = useState([]);

  useEffect(() => {
    window.addEventListener("load", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLong(position.coords.longitude);
          setLat(position.coords.latitude);
        });
      }
    });

    async function geoData() {
      const weatherData = await fetch(
        `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API}`
      ).then((res) => res.json());

      setWeatherDetails({
        temp: weatherData.main.temp,
        humid: weatherData.main.humidity,
        cityName: weatherData.name,
        clouds: weatherData.clouds.all,
        windSpeed: weatherData.wind.speed,
        desc: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        feel: weatherData.main.feels_like,
      });
      setBookmarks({
        temp: weatherData.main.temp,
        cityName: weatherData.name,
        icon: weatherData.weather[0].icon,
      });
    }
    geoData();
  }, []);

  useEffect(() => {
    async function openData() {
      const weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
      ).then((res) => res.json());

      setWeatherDetails({
        temp: weatherData.main.temp,
        humid: weatherData.main.humidity,
        cityName: weatherData.name,
        clouds: weatherData.clouds.all,
        windSpeed: weatherData.wind.speed,
        desc: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        feel: weatherData.main.feels_like,
      });
      setBookmarks({
        temp: weatherData.main.temp,
        cityName: weatherData.name,
        icon: weatherData.weather[0].icon,
      });
    }
    openData();
  }, [city]);

  const handleSearch = function (search) {
    setCity(search);
  };

  const handleBookmark = function () {
    setBookmarked((prev) => {
      return [...prev, bookmarks];
    });
  };

  return (
    <>
      <MetaHead />

      <main
        className="overflow-hidden bg-no-repeat bg-cover bg-center text-white grid grid-cols-1 xl:grid-cols-2 font-outfit"
        style={{ backgroundImage: `url('/img/${weatherDetails.icon}.jpg')` }}
      >
        {/* left wing */}
        <section className="relative">
          <WeatherInfo
            temperature={weatherDetails.temp}
            city={weatherDetails.cityName}
            icon={weatherDetails.icon}
            desc={weatherDetails.desc}
            sideSearch={handleSearch}
          />
        </section>
        {/* right wing */}
        <section className="block">
          <Detail
            cloud={weatherDetails.clouds}
            humidity={weatherDetails.humid}
            wind={weatherDetails.windSpeed}
            feels={weatherDetails.feel}
            mainSearch={handleSearch}
            setMark={handleBookmark}
            bookmark={bookmarked}
          />
        </section>
      </main>
    </>
  );
}
