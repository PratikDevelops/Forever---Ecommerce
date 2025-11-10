import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange Policy",
      desc: "Hassle-free exchanges within 7 days of purchase.",
    },
    {
      icon: assets.quality_icon,
      title: "Quality Assurance",
      desc: "Every product is checked for premium quality before shipping.",
    },
    {
      icon: assets.support_img,
      title: "24/7 Customer Support",
      desc: "We’re always here to help you with your queries.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Policy & Promise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={policy.icon}
                alt={policy.title}
                className="w-14 h-14 mb-4"
              />
              <p className="text-lg font-semibold text-gray-800">
                {policy.title}
              </p>
              <p className="text-sm text-gray-500 mt-1">{policy.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPolicy;
