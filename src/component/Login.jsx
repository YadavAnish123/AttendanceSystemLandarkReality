import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../reduxStore/counterSlice'

const Login = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log(count+111111111111111111111111111)
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
          <h1 className="text-2xl font-bold mb-6 text-indigo-700 mt-4">Login Account{count}</h1>
        </header>
        <form className="w-full max-w-xs space-y-4">
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="username">
              Username
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="username"
              id="username"
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
            />
          </div>
          <div>
            <input
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <footer>
          <div className="flex justify-between w-full text-sm">
            <a className="text-indigo-700 hover:text-pink-700" href="#">
              Forgot Password?
            </a>
            <a className="text-indigo-700 hover:text-pink-700" href="#">
              Create Account
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Login;
