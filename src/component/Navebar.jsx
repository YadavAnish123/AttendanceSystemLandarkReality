import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
 
import { logout } from "../reduxStore/authSlice"; // Import the logout action

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentuser } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentuser === null) {
      navigate('/login');
    }
  }, [currentuser, navigate]);
  const handleLogout=()=>{
    dispatch(logout()); // Reset Redux state
    navigate("/login"); // Redirect to login page
    console.log(1)

  }

  return (
    <header className="bg-purple-200 shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center py-3 px-6 lg:px-10">
        <div className="text-xl font-semibold text-purple-700">
          <Link to="/">LANDMARKS <span className="text-orange-500">REALTY</span></Link>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="text-gray-700 hover:text-purple-600 transition">Home</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-purple-600 transition">Dashboard</Link>
          <Link to="/empmanage" className="text-gray-700 hover:text-purple-600 transition">Employee Management</Link>
          <Link to="/profile" className="text-gray-700 hover:text-purple-600 transition">Profile</Link>
        </nav>
        <div className="hidden md:flex space-x-3">
          {currentuser ? (
            <button onClick={handleLogout} className="flex items-center justify-center bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-red-700 transition">
            <FaSignOutAlt className="mr-1" /> Logout
          </button>
          ) : (
            <>
              <Link to="/login" className="flex items-center bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-purple-700 transition">
                <FaSignInAlt className="mr-1" /> Login
              </Link>
              <Link to="/signup" className="flex items-center bg-orange-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-orange-600 transition">
                <FaUser className="mr-1" /> Sign Up
              </Link>
            </>
          )}
        </div>
        <button className="md:hidden text-gray-700" onClick={() => setSidebarOpen(true)}>
          <FaBars size={20} />
        </button>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-end">
          <div className="w-60 bg-white h-full shadow-lg p-5 flex flex-col">
            <button className="self-end text-gray-700 text-xl" onClick={() => setSidebarOpen(false)}>
              <FaTimes />
            </button>
            <nav className="mt-5 flex flex-col space-y-3 text-sm">
              <Link to="/" className="text-gray-700 hover:text-purple-600" onClick={() => setSidebarOpen(false)}>Home</Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-purple-600" onClick={() => setSidebarOpen(false)}>Dashboard</Link>
              <Link to="/empmanage" className="text-gray-700 hover:text-purple-600" onClick={() => setSidebarOpen(false)}>Employee Management</Link>
              <Link to="/profile" className="text-gray-700 hover:text-purple-600" onClick={() => setSidebarOpen(false)}>Profile</Link>
            </nav>
            <div className="mt-auto flex flex-col space-y-3">
              {currentuser ? (
                <button onClick={handleLogout} className="flex items-center justify-center bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-red-700 transition">
                <FaSignOutAlt className="mr-1" /> Logout
              </button>
              ) : (
                <>
                  <Link to="/login" className="flex items-center justify-center bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-purple-700 transition" onClick={() => setSidebarOpen(false)}>
                    <FaSignInAlt className="mr-1" /> Login
                  </Link>
                  <Link to="/signup" className="flex items-center justify-center bg-orange-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-orange-600 transition" onClick={() => setSidebarOpen(false)}>
                    <FaUser className="mr-1" /> Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
