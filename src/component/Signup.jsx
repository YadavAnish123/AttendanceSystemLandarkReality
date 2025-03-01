import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInStart, signInFailure, signInSucess } from "../reduxStore/authSlice";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "" });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user)

  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      //https://attendancesystemlandmarkrealtybackend.onrender.com/api/v1/auth/login
      //http://127.0.0.1:3000/api/v1/auth/login
      dispatch(signInStart())
      const res = await fetch('https://attendancesystemlandmarkrealtybackend.onrender.com/api/v1/auth/register', {
        method: 'Post', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)

      })
      const d = await res.json();
      if (d.status == false) {
        dispatch(signInFailure(d.message))
        return;
      }
      dispatch(signInSucess(d.data.user.name));
      navigate('/')


    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      
        {/* Left Section - Image or Placeholder Text */}
        <div className="w-full md:w-1/2 bg-indigo-50 flex justify-center items-center p-4">
        <img
          className="w-3/4 object-cover hidden md:block"
          src="src\assets\logo2.png"
          alt="Logo"
        />
      </div>
     

      <div className="w-full md:w-1/2 bg-white h-full flex flex-col items-center justify-center px-6 py-4">
        {/* Right Section */}
        <h1 className="text-2xl font-bold mb-6 text-left mt-4">Create Account</h1>
        <div className="w-full max-w-xs space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            />
          </div>

          {/* Signup Button */}
          <button
            className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? "Signing in..." : "Sign In"}

          </button>
          {error && <p className="text-red-500">{error}</p>}

          {/* Login Link */}
          <div className="flex justify-center text-sm mt-4">
            <p>
              Already have an account?
              <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
