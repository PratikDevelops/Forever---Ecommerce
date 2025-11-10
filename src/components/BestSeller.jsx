import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    console.log("Products in context:", products);

    if (products && products.length > 0) {
      const bestProduct = products.filter((item) => item.bestseller);
      console.log("Filtered best sellers:", bestProduct);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]);

  if (!products || products.length === 0)
    return <p className="text-center text-gray-500 py-6">Loading products...</p>;

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Best Sellers
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
            Our most-loved products, handpicked by our happy customers.
          </p>
        </div>

        {bestSeller.length === 0 ? (
          <p className="text-center text-gray-500">No best sellers found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6">
            {bestSeller.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id || item.id}
                image={item.image}
                price={item.price}
                name={item.name}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSeller;

