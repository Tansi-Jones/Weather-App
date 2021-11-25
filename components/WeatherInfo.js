import Sidebar from "./SideBar";

export default function WeatherInfo({ temperature, city, date, icon, desc }) {
  return (
    <>
      <div className="relative p-10 md:p-28 h-screen w-screen md:h-full md:w-full flex flex-col">
        <div className="text-2xl tracking-wider">
          <h1>the.weather</h1>
        </div>
        {/* sidebar */}
        <div className="block lg:hidden">
          <Sidebar />
        </div>
        <div className="flex flex-col xl:flex-row items-center md:space-x-10 justify-between md:flex-grow pt-40 md:pt-64">
          <div>
            <h1 className="text-white text-8xl lg:text-9xl xl:text-[10rem] pb-32 md:pb-0">
              {temperature} <sup className="font-medium">o</sup>
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-16">
            <div className="space-y-3 pt-6">
              <h1 className="text-5xl md:text-6xl font-regular capitalize">
                {city}
              </h1>
              <p className="text-md tracking-wider">
                <span>10:36</span> - <span>Tuesday, 22 Oct `19</span>
              </p>
            </div>
            <div className=" md:-mt-14">
              <img src={`/icon/${icon}.svg`} className="w-36" />
              <p className="text-2xl tracking-wider capitalize">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
