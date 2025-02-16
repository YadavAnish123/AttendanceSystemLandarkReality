import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInStart, signInFailure, signInSucess } from "../reduxStore/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user)

  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //https://attendancesystemlandmarkrealtybackend.onrender.com/api/v1/auth/login
      //http://127.0.0.1:3000/api/v1/auth/login
      dispatch(signInStart)
      const res = await fetch('https://attendancesystemlandmarkrealtybackend.onrender.com/api/v1/auth/login', {
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
      {/* Left side with image */}
      <div className="w-full md:w-1/2 bg-indigo-50 flex justify-center items-center p-4">
        <img
          className="w-3/4 object-cover hidden md:block"
          src="https://img.icons8.com/fluent/344/year-of-tiger.png"
          alt="Logo"
        />
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-4">
        <header>
          <h1 className="text-2xl font-bold mb-6 text-indigo-700 mt-4">
            Login Account
          </h1>
        </header>
        <form className="w-full max-w-xs space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <p className="text-red-500">{error}</p>
        <footer>
          <div className="flex justify-between w-full text-sm">
            <a className="text-indigo-700 hover:text-pink-700" href="#">
              Forgot Password?
            </a>
            <a className="text-indigo-700 hover:text-pink-700" href="/signup">
              Create Account
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Login;
