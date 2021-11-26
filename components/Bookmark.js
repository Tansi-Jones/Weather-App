export default function Bookmark({ city, icon, temp, deleteBookmark }) {
  return (
    <div className="backdrop-filter backdrop-blur-lg w-28 h-36 rounded-md bg-gray-700 p-4 space-y-2  opacity-80 cursor-pointer">
      <p className="text-white text-center text-sm">{city}</p>
      <img src={`/icon/${icon}.svg`} className="h-10 pl-3" />
      <p className="text-white text-center">
        {temp} <sup>o</sup>
      </p>
    </div>
  );
}
