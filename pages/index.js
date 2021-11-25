import { useEffect, useState } from "react";
import Detail from "../components/Detail";
import MetaHead from "../components/MetaHead";
import WeatherInfo from "../components/WeatherInfo";

export default function Home() {
  const [API, setAPI] = useState("a38b34b95d89cba81c270becc66f79d2");
  const [city, setCity] = useState("girne");
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
    }
    openData();
  }, [city]);

  const handleSearch = function (search) {
    setCity(search);
  };

  return (
    <>
      <MetaHead />

      <main
        className=" bg-no-repeat bg-cover bg-center text-white grid grid-cols-1 xl:grid-cols-2 font-outfit"
        style={{ backgroundImage: `url('/img/${weatherDetails.icon}.jpg')` }}
      >
        {/* left wing */}
        <section className="relative">
          <WeatherInfo
            temperature={weatherDetails.temp}
            city={weatherDetails.cityName}
            // date={}
            icon={weatherDetails.icon}
            desc={weatherDetails.desc}
            sideSearch={handleSearch}
          />
        </section>
        {/* right wing */}
        <section className="hidden lg:block">
          <Detail
            cloud={weatherDetails.clouds}
            humidity={weatherDetails.humid}
            wind={weatherDetails.windSpeed}
            feels={weatherDetails.feel}
            mainSearch={handleSearch}
            // bookmark={}
          />
        </section>
      </main>
    </>
  );
}
