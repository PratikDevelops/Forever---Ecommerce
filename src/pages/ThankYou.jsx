import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Home, ShoppingBag } from "lucide-react";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          Thank You for Your Order!
        </h1>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully. You’ll receive a confirmation
          email with order details soon.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 bg-black text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
          <button
            onClick={() => navigate("/myorders")}
            className="flex items-center justify-center gap-2 border border-gray-800 text-gray-800 px-5 py-2 rounded-xl hover:bg-gray-800 hover:text-white transition"
          >
            <ShoppingBag className="w-5 h-5" />
            View My Orders
          </button>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        Need help?{" "}
        <span
          onClick={() => navigate("/contact")}
          className="underline cursor-pointer text-gray-700 hover:text-black"
        >
          Contact Us
        </span>
      </div>
    </div>
  );
};

export default ThankYouPage;
