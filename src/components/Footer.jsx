import React from "react";
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full text-gray-800 mt-10 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        
        <div>
          <h3 className="text-lg font-semibold mb-3">About Forever</h3>
          <p className="text-gray-600">
            Forever is a modern fashion brand that blends comfort, style, and confidence.
            We believe in creating timeless pieces that define your unique vibe.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/" className="hover:text-black transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-black transition">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-black transition">Contact</Link></li>
            <li><Link to="/about" className="hover:text-black transition">About</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Mumbai, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@forever.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-black"><Instagram size={20} /></a>
            <a href="#" className="hover:text-black"><Facebook size={20} /></a>
            <a href="#" className="hover:text-black"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Forever. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
