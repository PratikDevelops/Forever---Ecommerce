import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? "/api/login" : "/api/signup";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) navigate("/");
      else alert(data.message || "Something went wrong");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-gray-500 text-center mb-6">
          {isLogin ? "Login to continue shopping" : "Join us and start exploring"}
        </p>

        <form onSubmit={handleAuth} className="space-y-5">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 text-gray-700 rounded-lg pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 text-gray-700 rounded-lg pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-black outline-none"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 text-gray-700 rounded-lg pl-10 pr-10 py-2.5 focus:ring-2 focus:ring-black outline-none"
              required
            />
            {showPass ? (
              <EyeOff
                size={18}
                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                onClick={() => setShowPass(false)}
              />
            ) : (
              <Eye
                size={18}
                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                onClick={() => setShowPass(true)}
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-5 text-gray-600 text-sm">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="text-black underline cursor-pointer font-medium"
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-black underline cursor-pointer font-medium"
              >
                Login
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
