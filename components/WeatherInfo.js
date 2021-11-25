export default function WeatherInfo(temp, city, date, icon, desc) {
  return (
    <div className="p-28 h-full w-full flex flex-col">
      <div className="text-2xl tracking-wider">
        <h1>the.weather</h1>
      </div>
      <div className="flex items-center space-x-10 justify-between flex-grow pt-64">
        <div>
          <h1 className="text-white text-[10rem]">
            26 <sup className="font-medium">o</sup>
          </h1>
        </div>
        <div className="flex items-center justify-center space-x-16">
          <div className="space-y-3 pt-6">
            <h1 className="text-6xl font-regular capitalize">London</h1>
            <p className="text-md tracking-wider">
              <span>10:36</span> - <span>Tuesday, 22 Oct `19</span>
            </p>
          </div>
          <div>
            <img src="/icon/02d.svg" className="h-20" />
            <p className="text-xl tracking-wider">Sunny</p>
          </div>
        </div>
      </div>
    </div>
  );
}
