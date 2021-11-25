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
        <div></div>
      </div>
    </>
  );
}
