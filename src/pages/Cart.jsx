import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Minus, Trash2 } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, currency, delivery_fee, totalPrice } = useContext(ShopContext);
  const navigate = useNavigate();
  const grandTotal = totalPrice + (cart.length ? delivery_fee : 0);

  const goToPlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/place-order");
  };

  if (cart.length === 0)
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link to="/" className="text-blue-600 underline">Continue Shopping</Link>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      <div className="flex flex-col gap-4">
        {cart.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border rounded-md p-4 shadow-sm">
            <img src={item.image[0]} alt={item.name} className="w-28 h-28 object-contain rounded-md" />
            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full">
              <div className="flex flex-col gap-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600 text-sm">Size: {item.size}</p>
                <p className="text-blue-600 font-semibold">{currency}{item.price}</p>
              </div>

              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <button onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)} disabled={item.quantity <= 1} className="p-1 border rounded-md hover:bg-gray-100 transition">
                  <Minus size={18} />
                </button>
                <span className="px-2">{item.quantity}</span>
                <button onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)} className="p-1 border rounded-md hover:bg-gray-100 transition">
                  <Plus size={18} />
                </button>
              </div>

              <button onClick={() => removeFromCart(item._id, item.size)} className="text-red-600 hover:text-red-800 mt-2 sm:mt-0">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex gap-3">
          <button onClick={clearCart} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition flex items-center gap-1">
            <Trash2 size={16} /> Clear Cart
          </button>
          <Link to="/" className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition">Continue Shopping</Link>
        </div>

        <div className="text-right flex flex-col gap-2">
          <p className="text-lg font-medium">Subtotal: {currency}{totalPrice}</p>
          <p className="text-gray-600">Delivery Fee: {currency}{cart.length ? delivery_fee : 0}</p>
          <p className="text-xl font-semibold">Total: {currency}{grandTotal}</p>
          <button onClick={goToPlaceOrder} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
