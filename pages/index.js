import Detail from "../components/Detail";
import MetaHead from "../components/MetaHead";
import WeatherInfo from "../components/WeatherInfo";

export default function Home() {
  return (
    <>
      <MetaHead />

      <main
        className="h-screen w-screen bg-no-repeat bg-fill bg-center text-white grid grid-cols-1 xl:grid-cols-2 font-outfit"
        style={{ backgroundImage: `url('/img/${"10n.jpg"}')` }}
      >
        {/* left wing */}
        <section className="">
          <WeatherInfo
          // temp={} city={} date={} icon={} desc={}
          />
        </section>
        {/* right wing */}
        <Detail />
      </main>
    </>
  );
}
