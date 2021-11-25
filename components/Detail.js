import { RiSearchLine } from "react-icons/ri";

export default function Detail() {
  return (
    <>
      <div className=" backdrop-filter backdrop-blur-3xl pl-20 ">
        <div className="flex justify-between">
          <input
            type="text"
            name=""
            id=""
            placeholder="Another location"
            className="bg-transparent outline-none text-gray-400 placeholder-gray-400 text-2xl font-thin pt-20 border-b pb-3 border-gray-600 w-80"
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
            <p className="text-white">12%</p>
          </div>
          <div className="flex items-center justify-between pt-10 text-xl tracking-wider text-gray-400">
            <p className="">Humidity</p>
            <p className="text-white">78%</p>
          </div>
          <div className="flex items-center justify-between pt-10 text-xl tracking-wider text-gray-400">
            <p className="">Wind</p>
            <p className="text-white">1Km/h</p>
          </div>
          <div className="flex items-center justify-between pt-10 text-xl tracking-wider text-gray-400">
            <p className="">Rain</p>
            <p className="text-white">0mm</p>
          </div>
        </div>

        {/* Bookmark Details */}
        <div className="my-16 pb-10 mr-20 border-b border-gray-600">
          <h1 className="capitalize tracking-wider text-xl ">
            Weather Bookmarks
          </h1>
        </div>
      </div>
    </>
  );
}
