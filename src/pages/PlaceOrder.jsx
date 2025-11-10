import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { cart, totalPrice, currency, delivery_fee, checkout } = useContext(ShopContext);
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handlePlaceOrder = () => {
    if (!cart.length) {
      alert("Your cart is empty!");
      return;
    }

    if (!customer.name || !customer.email || !customer.phone || !customer.address) {
      alert("Please fill all details!");
      return;
    }

    checkout(customer);
    navigate("/thankyou");
  };

  const grandTotal = totalPrice + (cart.length ? delivery_fee : 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">Place Order</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 border p-4 rounded-md shadow-sm">
          <h2 className="text-lg font-medium mb-4">Customer Details</h2>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customer.name}
              onChange={handleChange}
              className="border px-3 py-2 rounded-md w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={customer.email}
              onChange={handleChange}
              className="border px-3 py-2 rounded-md w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={customer.phone}
              onChange={handleChange}
              className="border px-3 py-2 rounded-md w-full"
            />
            <textarea
              name="address"
              placeholder="Delivery Address"
              value={customer.address}
              onChange={handleChange}
              className="border px-3 py-2 rounded-md w-full"
            />
          </div>

          <h2 className="text-lg font-medium mt-6 mb-2">Payment Method</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={customer.payment === "cod"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={customer.payment === "upi"}
                onChange={handleChange}
              />
              UPI / Card
            </label>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full"
          >
            Place Order
          </button>
        </div>

        <div className="flex-1 border p-4 rounded-md shadow-sm">
          <h2 className="text-lg font-medium mb-4">Order Summary</h2>
          <div className="flex flex-col gap-2">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between">
                <p>{item.name} x {item.quantity}</p>
                <p>{currency}{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="border-t mt-2 pt-2 flex justify-between">
            <p>Subtotal:</p>
            <p>{currency}{totalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Fee:</p>
            <p>{currency}{cart.length ? delivery_fee : 0}</p>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-2">
            <p>Total:</p>
            <p>{currency}{grandTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
