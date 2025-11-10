import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import toast from "react-hot-toast";

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const product = products.find((p) => p._id === productId);
    if (product) {
      setProductData(product);
      setMainImage(product.image[0]);
      setSelectedSize(product.sizes[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="p-10 text-center">Loading...</div>;

  const relatedProducts = products
    .filter((p) => p._id !== productData._id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(productData, selectedSize);
    toast.success("Added to cart!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="hidden md:flex flex-col gap-2">
          {productData.image.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${productData.name}-${i}`}
              className={`w-20 h-20 object-contain cursor-pointer border rounded-md ${mainImage === img ? "border-gray-800" : "border-gray-300"
                }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        <div className="flex-1 flex flex-col items-center">
          <img
            src={mainImage}
            alt={productData.name}
            className="w-full max-w-md rounded-md object-contain"
          />
          <div className="flex md:hidden gap-2 mt-3 overflow-x-auto">
            {productData.image.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${productData.name}-${i}`}
                className={`w-16 h-16 object-contain cursor-pointer border rounded-md ${mainImage === img ? "border-gray-800" : "border-gray-300"
                  }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">{productData.name}</h1>
          <p className="text-gray-500">({productData.reviews || 0}) Reviews</p>
          <p className="text-xl font-bold text-gray-800">₹{productData.price}</p>
          <p className="text-gray-700 line-clamp-3">{productData.description}</p>

          <div className="mt-2">
            <p className="font-medium text-gray-800 mb-1">Select Size</p>
            <div className="flex gap-2 flex-wrap">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded-md text-sm ${selectedSize === size
                      ? "border-black text-black"
                      : "border-gray-300"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            ADD TO CART
          </button>

          <ul className="mt-4 text-sm text-gray-600 space-y-1">
            <li>100% Original product.</li>
            <li>Cash on delivery available.</li>
            <li>Easy returns within 7 days.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex border-b border-gray-300">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-4 py-2 ${activeTab === "description"
                ? "border-b-2 border-black text-black"
                : "text-gray-600"
              }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-4 py-2 ${activeTab === "reviews"
                ? "border-b-2 border-black text-black"
                : "text-gray-600"
              }`}
          >
            Reviews ({productData.reviews || 0})
          </button>
        </div>
        <div className="mt-4 text-gray-700 text-sm">
          {activeTab === "description" ? (
            <p>{productData.description}</p>
          ) : (
            <p>There are {productData.reviews || 0} reviews for this product.</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {relatedProducts.map((item) => (
            <Link key={item._id} to={`/product/${item._id}`}>
              <div className="border rounded-md p-2 hover:shadow-md transition flex flex-col items-center bg-white">
                <div className="w-full h-40 flex items-center justify-center">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="max-h-full object-contain rounded-md"
                  />
                </div>
                <div className="mt-2 text-center w-full">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                  <p className="text-sm text-gray-700 font-semibold mt-1">
                    ₹{item.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Product;
