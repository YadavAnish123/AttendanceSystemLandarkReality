import React, { useState } from 'react'
import { useSelector,useDispatch } from "react-redux";

import { checkIn, checkOut} from "../reduxStore/authSlice";


const HomeUser = () => {
  const dispatch = useDispatch();
  const { token, ischeckedIn, lastcheckInTime,lastcheckOutTime } = useSelector(state => state.user);
  const getLocationAndCheckIn = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      await handleCheckIn(latitude, longitude);
    }, () => {
      alert("Unable to retrieve your location");
    });
  };

  const getLocationAndCheckOut = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      await handleCheckOut(latitude, longitude);
    }, () => {
      alert("Unable to retrieve your location");
    });
  };


  const handleCheckIn = () => {
    if (!token) {
      console.error("No access token found in cookies.");
      return;
    }
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({latitude,longitude});      
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        fetch("http://127.0.0.1:3000/api/v1/auth/mark-attendance", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log("Attendance Response:", result);
            if (result.status) {
              const time = new Date().toLocaleTimeString();
              dispatch(checkIn(result.data.user)); // Update Redux state           
            } else {
              console.error("Failed to mark attendance:", result.message);
            }
          })
          .catch(error => console.error("API error:", error));
      },
      (error) => {
        console.error("Error fetching location:", error.message);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };


  const handleCheckOut = async (latitude, longitude) => {
    try {
      const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({latitude,longitude});      
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
      const response = await fetch("http://127.0.0.1:3000/api/v1/auth/mark-attendance", requestOptions);

      const result = await response.json();
     
      const time = new Date().toLocaleTimeString();
      dispatch(checkOut(result.data.user)); // Update Redux state
     
    } catch (error) {
      console.error("Error checking out:", error);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-indigo-200 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Attendance</h1>
        {!ischeckedIn ? (
          <button
            onClick={getLocationAndCheckIn}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Check In
          </button>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 mb-4">Checked in at: <span className="font-semibold">{lastcheckInTime}</span></p>
            <button
              onClick={getLocationAndCheckOut}
              className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Check Out
            </button>
          </div>
        )}
        {lastcheckOutTime && (
          <p className="mt-4 text-center text-gray-600">Checked out at: <span className="font-semibold">{lastcheckOutTime}</span></p>
        )}
      </div>
    </div>
  );
};

export default HomeUser;
