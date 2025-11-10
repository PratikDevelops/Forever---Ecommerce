import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Orders = () => {
  const { orders } = useContext(ShopContext);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    if (orders && orders.length > 0) {
      setMyOrders(orders);
    } else {
      setMyOrders([]);
    }
  }, [orders]);

  if (myOrders.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">You have no orders yet</h2>
        <Link to="/" className="text-blue-600 underline">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">My Orders</h1>
      <div className="flex flex-col gap-4">
        {myOrders.map((order, index) => (
          <div key={index} className="border rounded-md p-4 shadow-sm flex flex-col gap-2">
            <p className="font-semibold">Order #{order.id}</p>
            <p className="text-gray-600 text-sm">Date: {new Date(order.date).toLocaleString()}</p>
            <p className="text-gray-600 text-sm">Payment Method: {order.payment.toUpperCase()}</p>
            <p className="text-gray-600 text-sm">Total: ₹{order.total}</p>
            <div className="flex flex-col gap-2 mt-2">
              {order.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-1">
                  <div className="flex items-center gap-2">
                    <img src={item.image[0]} alt={item.name} className="w-16 h-16 object-contain rounded-md" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-600 text-sm">Size: {item.size}</p>
                      <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-blue-600 font-semibold">₹{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
