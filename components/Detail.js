import { RiSearchLine } from "react-icons/ri";
import Bookmark from "./Bookmark";

export default function Detail({ cloud, humidity, wind, feels, bookmark }) {
  return (
    <>
      <div className=" backdrop-filter backdrop-blur-3xl pl-20 h-screen">
        <div className="flex justify-between">
          <input
            type="text"
            name=""
            id=""
            placeholder="Another location"
            className="bg-transparent outline-none text-white placeholder-white text-2xl font-thin pt-20 border-b pb-3 border-gray-600 w-80"
          />
          <button className="bg-gray-600 px-12 text-4xl text-gray-900">
            <RiSearchLine />
          </button>
        </div>

        {/* Weather details */}
        <div className="my-16 pb-10 mr-20 border-b border-gray-600">
          <h1 className="capitalize tracking-wider text-xl ">
            weather details
          </h1>
          <div className="flex items-center justify-between pt-10 text-xl tracking-wider text-gray-400">
            <p className="">Cloud</p>
            <p className="text-white">{cloud}%</p>
          </div>
          <div className="flex items-center justify-between pt-10 text-xl tracking-wider text-gray-400">
            <p className="">Humidity</p>
            <p className="text-white">{humidity}%</p>
          </div>
          <div className="flex items-center justify-between pt-10 text-xl tracking-wider text-gray-400">
            <p className="">Wind</p>
            <p className="text-white">{wind}Km/h</p>
          </div>
          <div className="flex items-center justify-between pt-10 text-xl tracking-wider text-gray-400">
            <p className="">Feels Like</p>
            <p className="text-white">
              {feels} <sup>o</sup>
            </p>
          </div>
        </div>

        {/* Bookmark Details */}
        <div className="my-16 pb-10 mr-20 border-b border-gray-600">
          <h1 className="capitalize tracking-wider text-xl ">
            Weather Bookmarks
          </h1>
          <div className="flex items-center justify-between pt-10 text-xl tracking-wider text-gray-400 space-x-3">
            <Bookmark />
            <Bookmark />
            <Bookmark />
            <Bookmark />
          </div>
        </div>
      </div>
    </>
  );
}
