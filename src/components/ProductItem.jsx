import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="block border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white group"
    >
      <div className="relative w-full h-56 sm:h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-3 text-center sm:text-left">
        <p className="text-gray-800 font-medium text-sm sm:text-base truncate">
          {name}
        </p>
        <p className="text-gray-900 font-semibold mt-1">
          {currency} {price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
