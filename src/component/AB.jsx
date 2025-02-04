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

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminAttendanceDashboard = () => {
  // Sample employee data
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", entryTime: "09:00 AM", exitTime: "05:00 PM" },
    { id: 2, name: "Jane Smith", entryTime: "09:15 AM", exitTime: "05:15 PM" },
    { id: 3, name: "Alice Johnson", entryTime: "09:05 AM", exitTime: "05:10 PM" },
    { id: 4, name: "Bob Brown", entryTime: "09:20 AM", exitTime: "05:25 PM" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  // Handle search input
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  // Chart data for attendance trends
  const attendanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Present",
        data: [20, 25, 22, 30, 28, 35, 40],
        borderColor: "rgba(124, 58, 237, 1)",
        backgroundColor: "rgba(124, 58, 237, 0.2)",
      },
      {
        label: "Absent",
        data: [5, 3, 4, 2, 6, 4, 3],
        borderColor: "rgba(249, 115, 22, 1)",
        backgroundColor: "rgba(249, 115, 22, 0.2)",
      },
    ],
  };

  // Gauge data for attendance percentage
  const attendancePercentage = 85; // Example percentage

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-2xl font-bold text-purple-700 mb-6">
          Admin Attendance Portal
        </h1>

        {/* Search Filter */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Employee..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Employee Table */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Employee Details
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border border-gray-300">Employee ID</th>
                  <th className="px-4 py-2 border border-gray-300">Name</th>
                  <th className="px-4 py-2 border border-gray-300">Entry Time</th>
                  <th className="px-4 py-2 border border-gray-300">Exit Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="px-4 py-2 border border-gray-300">{employee.id}</td>
                    <td className="px-4 py-2 border border-gray-300">{employee.name}</td>
                    <td className="px-4 py-2 border border-gray-300">{employee.entryTime}</td>
                    <td className="px-4 py-2 border border-gray-300">{employee.exitTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Attendance Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Line Chart for Attendance Trends */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Attendance Trends
            </h2>
            <Line
              data={attendanceData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: "Monthly Attendance Overview",
                  },
                },
              }}
            />
          </div>

          {/* Gauge for Attendance Percentage */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Attendance Percentage
            </h2>
            <div className="flex justify-center">
              <Gauge
                value={attendancePercentage}
                width={200}
                height={200}
                text={`${attendancePercentage}%`}
              />
            </div>
          </div>
        </div>

        {/* Additional Functionality */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Additional Features
          </h2>
          <div className="flex space-x-4">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
              Export Data
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Send Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAttendanceDashboard;