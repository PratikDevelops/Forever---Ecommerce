import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOrder, setSortOrder] = useState("Relevant");
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const applyFilters = () => {
    let filtered = [...products];
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }
    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((p) => selectedTypes.includes(p.subCategory));
    }
    if (sortOrder === "LOW HIGH") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "HIGH LOW") {
      filtered.sort((a, b) => b.price - a.price);
    }
    setFilterProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedCategories, selectedTypes, sortOrder, search, showSearch]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-3 sm:gap-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
          All Collections
        </h1>
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 md:hidden border border-gray-300 px-3 py-2 rounded-md text-gray-700 text-sm"
            onClick={() => setShowFilter(!showFilter)}
          >
            <img
              src={assets.dropdown_icon}
              alt="Filter Icon"
              className={`w-4 h-4 transition-transform ${showFilter ? "rotate-180" : ""}`}
            />
            Filters
          </button>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded-md p-2 text-sm outline-none"
          >
            <option value="Relevant">Sort: Relevant</option>
            <option value="HIGH LOW">Price: High → Low</option>
            <option value="LOW HIGH">Price: Low → High</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div
          className={`${
            showFilter ? "block" : "hidden"
          } md:block w-full md:w-64 p-5 rounded-lg md:rounded-none border md:border-0 bg-white shadow-sm md:shadow-none md:sticky md:top-24 h-fit self-start`}
        >
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Filters</h2>
          <div className="mb-6">
            <p className="font-medium mb-2 text-gray-700">Categories</p>
            <div className="space-y-2 text-gray-600">
              {["Men", "Women", "Kids"].map((category) => (
                <label key={category} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="accent-blue-600"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium mb-2 text-gray-700">Type</p>
            <div className="space-y-2 text-gray-600">
              {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                <label key={type} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    value={type}
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleTypeChange(type)}
                    className="accent-blue-600"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setSelectedCategories([]);
              setSelectedTypes([]);
              setSortOrder("Relevant");
            }}
            className="mt-6 w-full border border-gray-300 text-gray-700 rounded-md py-2 text-sm hover:bg-gray-100 transition"
          >
            Clear Filters
          </button>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
