import React, { useState, useEffect, useRef, useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, User, ListOrdered, LogOut } from "lucide-react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const { setshowSearch, cart } = useContext(ShopContext);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        <Link to="/" className="flex items-center">
          <img src={assets.logo} alt="Logo" className="w-24 md:w-32 cursor-pointer" />
        </Link>

        <ul
          className={`absolute md:static bg-white w-full md:w-auto left-0 top-14 md:top-0 md:flex items-center gap-6 font-medium transition-all duration-300 ease-in-out ${
            menuOpen ? "flex flex-col p-5 border-t shadow-sm" : "hidden md:flex"
          }`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Collection", path: "/collection" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative text-gray-700 hover:text-black transition duration-200 ${
                    isActive ? "font-semibold" : ""
                  }`
                }
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-5">
          <img
            onClick={() => setshowSearch(true)}
            src={assets.search_icon}
            alt="Search"
            className="w-5 h-5 md:w-5 md:h-5 cursor-pointer"
          />

          <div className="relative" ref={profileRef}>
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="w-5 h-5 md:w-5 md:h-5 cursor-pointer"
              onClick={toggleProfile}
            />
            {profileOpen && (
              <div className="absolute right-0 mt-3 bg-white border border-gray-100 shadow-lg rounded-xl w-44 text-sm font-medium overflow-hidden">
                <button
                  onClick={() => {
                    navigate("/profile");
                    setProfileOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-50"
                >
                  <User size={16} /> My Profile
                </button>
                <button
                  onClick={() => {
                    navigate("/myorders");
                    setProfileOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-50"
                >
                  <ListOrdered size={16} /> My Orders
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setProfileOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 w-full text-left text-red-600 hover:bg-gray-50"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>

          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt="Cart"
              className="w-5 h-5 md:w-5 md:h-5 cursor-pointer"
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="md:hidden">
            {menuOpen ? (
              <X size={24} onClick={toggleMenu} className="cursor-pointer" />
            ) : (
              <Menu size={24} onClick={toggleMenu} className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
