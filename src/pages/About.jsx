import React from "react";
import { ShoppingBag, Heart, Shirt, Star } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="text-center py-20 px-6 border-b border-gray-200">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Where fashion meets creativity  redefining the art of wearing confidence.
        </p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Story</h2>
        <div className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          <p className="mb-6">
            We started with a vision to create fashion that reflects individuality  designs that speak,
            prints that express, and styles that inspire. From printed t-shirts to lifestyle essentials,
            we craft each piece with passion, comfort, and authenticity.
          </p>
          <p>
            Our collection blends <span className="font-semibold">classy elegance</span>,
            <span className="font-semibold"> youthful energy</span>, and
            <span className="font-semibold"> minimalist luxury</span>  perfect for those who believe
            that fashion is more than what you wear; it’s who you are.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="bg-white p-8 shadow-sm rounded-2xl text-center border border-gray-100 hover:shadow-md transition">
            <Star className="mx-auto mb-4" size={40} strokeWidth={1.5} />
            <h3 className="text-xl font-semibold mb-2">Classy & Elegant</h3>
            <p className="text-gray-600">
              Each piece embodies grace, subtle charm, and timeless style  because simplicity never goes out of fashion.
            </p>
          </div>

          <div className="bg-white p-8 shadow-sm rounded-2xl text-center border border-gray-100 hover:shadow-md transition">
            <Heart className="mx-auto mb-4" size={40} strokeWidth={1.5} />
            <h3 className="text-xl font-semibold mb-2">Trendy & Youthful</h3>
            <p className="text-gray-600">
              Bold, expressive, and full of personality  made for those who move with confidence and creativity.
            </p>
          </div>

          <div className="bg-white p-8 shadow-sm rounded-2xl text-center border border-gray-100 hover:shadow-md transition">
            <Shirt className="mx-auto mb-4" size={40} strokeWidth={1.5} />
            <h3 className="text-xl font-semibold mb-2">Minimal & Premium</h3>
            <p className="text-gray-600">
              We focus on premium materials and minimal design that redefine comfort and elegance for everyday wear.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <ShoppingBag className="mx-auto mb-6" size={50} strokeWidth={1.5} />
        <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Be part of a lifestyle that blends creativity, comfort, and confidence.  
          Explore our latest collections and express your unique style today.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:opacity-90 transition">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default About;
