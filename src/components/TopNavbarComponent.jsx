import { Bell, Search } from "lucide-react";
import { useState } from "react";

export default function TopNavbarComponent({ onSearchChange }) {
  const [query, setQuery] = useState("");

  const searchHandler = (e) => {
    setQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="flex justify-between items-center">
      {/* Search */}
      <form className="relative w-9/12" onSubmit={(e) => e.preventDefault()}>
        <button className="cursor-pointer">
          <Search className="w-6 h-6 text-primary-text absolute top-3 left-4" />
        </button>

        <input
          name="search"
          type="text"
          value={query}
          onChange={searchHandler}
          placeholder="Search assignment here"
          className="w-full bg-white py-3 pl-14 pr-5 rounded-xl h-12 border-none focus:border-none focus:ring-0 focus:outline-custom-sky-blue"
        />
      </form>

      {/* Notifications */}
      <div className="relative w-12 h-12 bg-white p-2.5 rounded-full">
        <Bell className="w-7 h-7 text-primary-text" />
        <div className="bg-red-600 w-2.5 h-2.5 rounded-full absolute top-2 right-3"></div>
      </div>

      {/* User Profile */}
      <div className="h-16 rounded-xl w-2/12 bg-white py-2.5 px-3 flex gap-3 items-start">
        <img
          src="../../images/pf.jpg"
          alt="profile image"
          width={45}
          height={45}
          className="rounded-full"
        />
        <div className="overflow-hidden">
          <p className="capitalize text-base">Middle Child</p>
          <p className="text-gray-400 text-sm truncate">
            ramenenjoyer@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
