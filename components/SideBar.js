import { RiSearchLine } from "react-icons/ri";

export default function Sidebar({ searchInput }) {
  return (
    <>
      <div className="flex justify-between pt-10">
        <input
          type="text"
          name=""
          id=""
          placeholder="Another location"
          className="bg-transparent outline-none text-white placeholder-white text-xl md:text-3xl font-thin border-b border-gray-600 w-56 md:w-96 "
        />
        <button className="bg-gray-600 p-3 text-md rounded-full text-gray-900">
          <RiSearchLine />
        </button>
      </div>
    </>
  );
}
