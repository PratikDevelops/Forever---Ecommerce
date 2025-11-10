import React, { createContext, useState, useEffect, useMemo } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 10;

  const [search, setsearch] = useState("");
  const [showSearch, setshowSearch] = useState(false);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product, size) => {
    const existing = cart.find((item) => item._id === product._id && item.size === size);
    if (existing) {
      setCart(
        cart.map((item) =>
          item._id === product._id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, size, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId, size) => {
    setCart(cart.filter((item) => !(item._id === productId && item.size === size)));
  };

  const updateQuantity = (productId, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
    } else {
      setCart(
        cart.map((item) =>
          item._id === productId && item.size === size
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const clearCart = () => setCart([]);

  const totalItems = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  const checkout = (customerInfo) => {
    if (!cart.length) return;

    const order = {
      id: Math.floor(Math.random() * 1000000),
      date: new Date(),
      items: cart,
      total: totalPrice + delivery_fee,
      payment: customerInfo?.payment || "cod",
      customer: {
        name: customerInfo?.name || "",
        email: customerInfo?.email || "",
        phone: customerInfo?.phone || "",
        address: customerInfo?.address || "",
      },
    };
    setOrders([order, ...orders]);
    clearCart();
  };

  const value = {
    products,
    cart,
    orders,
    totalItems,
    totalPrice,
    currency,
    delivery_fee,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    checkout,
    search,
    setsearch,
    showSearch,
    setshowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
