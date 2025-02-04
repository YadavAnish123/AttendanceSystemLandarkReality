import React, { useState } from "react";
import { Gauge } from "@mui/x-charts/Gauge";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [dataRange, setDataRange] = useState("monthly");

  const attendanceData = [
    { id: 1, name: "Anish", department: "Software", leaveRemaining: 6, date: "2025-01-01", reason: "Going home" },
    { id: 2, name: "Riya", department: "HR", leaveRemaining: 4, date: "2025-01-05", reason: "Medical leave" },
    { id: 3, name: "Rahul", department: "Finance", leaveRemaining: 2, date: "2025-01-10", reason: "Family emergency" },
  ];

  const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => `2025-01-${i + 1}`),
    datasets: [
      {
        label: "Present",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 40) + 30),
        borderColor: "#7c3aed",
        backgroundColor: "rgba(124, 58, 237, 0.2)",
        fill: true,
      },
      {
        label: "Absent",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20) + 10),
        borderColor: "#f97316",
        backgroundColor: "rgba(249, 115, 22, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
   <div className="flex flex-wrap w-full gap-8 justify-center px-4 py-14  ">
  {/* Attendance Summary */}
  <div className="bg-white text-white shadow-lg rounded-xl p-6 w-full sm:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105 hover:shadow-2xl">
    <h2 className="text-xl font-bold mb-6 text-indigo-800 text-center">Attendance Summary</h2>
    <div className="space-y-5 text-black">
      {["Total Employees", "Present", "Absent", "On Leave"].map((item, idx) => (
        <div key={idx} className="flex justify-between items-center font-medium text-sm border-b pb-3 border-gray-300">
          <span className="flex items-center ml-16">
            <i className="text-xl text-yellow-400 mr-2">📊</i> {/* Icon */}
            {item}
          </span>
          <span className="font-medium text-sm mr-32">50</span> {/* Example stat */}
        </div>
      ))}
    </div>
  </div>

  {/* Attendance Percentage Gauge */}
  <div className="bg-white shadow-lg rounded-xl p-6 w-full sm:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105   ">
    <h2 className="text-xl  font-bold mb-6 text-center text-indigo-800">Attendance Percentage</h2>
    {["Present", "Absent", "Leave","Half Day","Late Arrival"].map((status, index) => (
      <div key={index} className="flex items-center justify-between py-3 font-medium text-sm ml-24">
        <span className="text-sm font-medium">{status}</span>
        <div className=" flex items-center">
          
          <span className="mr-32 font-medium text-sm ">{Math.floor(Math.random() * 100)}%</span> {/* Random Percentage */}
        </div>
      </div>
    ))}
  </div>
</div>


      
      {/* Attendance Graph */}
      <div className=" shadow-lg rounded-xl p-16 mt-6  justify-items-center bg-white">
        <h2 className="text-sm font-semibold text-indigo-800 mb-4">Attendance Trend</h2>
        <div className="w-full h-72 justify-items-center  ">
          <Line data={chartData} />
        </div>
      </div>
      

      {/* Leave Requests Table */}
      <div className=" bg-white shadow-lg rounded-xl p-16 mt-6">
        <h2 className="text-sm font-bold text-indigo-800 mb-4">Leave Requests</h2>
        <table className="w-full border-collapse  ">
          <thead>
            <tr className="bg-indigo-100 text-indigo-800 text-sm font-medium">
              <th className="p-3">Emp ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Department</th>
              <th className="p-3">Leaves Left</th>
              <th className="p-3">Date</th>
              <th className="p-3">Reason</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm font-sm">
            {attendanceData.map((entry) => (
              <tr key={entry.id} className="border-b ">
                <td className="p-3 text-center">{entry.id}</td>
                <td className="p-3 text-center">{entry.name}</td>
                <td className="p-3 text-center">{entry.department}</td>
                <td className="p-3 text-center">{entry.leaveRemaining}</td>
                <td className="p-3 text-center">{entry.date}</td>
                <td className="p-3 text-center">{entry.reason}</td>
                <td className="p-3 flex space-x-2 justify-center">
                  <button className="bg-indigo-800 text-white px-3 py-1 rounded hover:bg-green-600">Approve</button>
                  <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-red-600">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Dashboard;