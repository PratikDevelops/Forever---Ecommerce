import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Join Our Newsletter
        </h2>

        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Subscribe to get exclusive discounts, early access to new arrivals,
          and the latest fashion updates directly in your inbox.
        </p>

        <form className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          We respect your privacy. You can unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
