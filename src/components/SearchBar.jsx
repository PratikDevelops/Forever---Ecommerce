import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Search, X } from "lucide-react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setsearch, showSearch, setshowSearch } = useContext(ShopContext);
  const location = useLocation();

  const onCollectionPage = location.pathname.startsWith("/collection");

  if (!showSearch || !onCollectionPage) return null;

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full shadow-sm w-10/12 sm:w-8/12 md:w-6/12">
        <Search className="text-xl text-gray-700" />
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search products..."
          className="flex-1 bg-transparent outline-none text-gray-700"
        />
        <X
          onClick={() => setshowSearch(false)}
          className="text-xl text-gray-700 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchBar;
