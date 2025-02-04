import React from 'react';

const Signup = () => {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <div className="bg-blue-400 w-full md:w-1/2 flex items-center justify-center p-6">
        {/* Left Section - Image or Placeholder Text */}
        <p className="text-xl font-semibold text-white hidden md:block">Image</p>
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
              placeholder="Password"
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            />
          </div>

          {/* Signup Button */}
          <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Sign Up
          </button>

          {/* Login Link */}
          <div className="flex justify-center text-sm mt-4">
            <p>Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
