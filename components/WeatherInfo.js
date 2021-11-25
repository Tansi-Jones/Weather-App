export default function WeatherInfo(img, temp, city, date, icon, desc) {
  return (
    <>
      <section>
        <div className="relative h-screen w-screen">
          <Image src={img} className="" />
        </div>
      </section>
    </>
  );
}
