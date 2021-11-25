import { useEffect, useState } from "react";
import Detail from "../components/Detail";
import MetaHead from "../components/MetaHead";
import WeatherInfo from "../components/WeatherInfo";

export default function Home() {
  const [] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <MetaHead />

      <main
        className=" bg-no-repeat bg-fill bg-center text-white grid grid-cols-1 xl:grid-cols-2 font-outfit"
        style={{ backgroundImage: `url('/img/${"13n.jpg"}')` }}
      >
        {/* left wing */}
        <section className="relative">
          <WeatherInfo
          // temp={} city={} date={} icon={} desc={}
          />
        </section>
        {/* right wing */}
        <section className="hidden lg:block">
          <Detail
          // cloud={} humidity={} wind={} rain={} bookmark={}
          />
        </section>
      </main>
    </>
  );
}
