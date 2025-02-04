import React, { useState } from 'react';

const Home = () => {
  // Sample data for table
  const data = [
    { date: "2025-02-01", name: "Anish", starttime: "09:00", endtime: "17:00", workinghr: "8", status: "Completed" },
    { date: "2025-02-02", name: "Prince", starttime: "09:30", endtime: "17:30", workinghr: "8", status: "Completed" },
    { date: "2025-02-03", name: "Satyam", starttime: "10:00", endtime: "18:00", workinghr: "8", status: "Pending" },
  ];

  return (
    <main className='bg-gray-100'>
    <div className="container mx-auto p-5 ">
      {/* Filter section */}
      <div className="flex gap-4 items-center mb-6 ">
        <select className="px-4 py-2 border rounded-md text-sm font-sm   shadow-md  ">
          <option value="anish">Anish</option>
          <option value="price">Prince</option>
        </select>

        <label htmlFor="event-date" className="text-sm font-medium">From:</label>
        <input
          type="date"
          id="from-date"
          min="2025-02-01"
          max="2025-12-31"
          value="2025-02-01"
          className="px-4 py-2 border rounded-md   shadow-md   text-sm font-sm"
        />

        <label htmlFor="event-date" className="text-sm font-medium">To:</label>
        <input
          type="date"
          id="to-date"
          min="2025-02-01"
          max="2025-12-31"
          value="2025-02-01"
          className="px-4 py-2 border rounded-md   shadow-md  text-sm font-sm"
        />

        <button className="px-6 py-2 bg-orange-500  shadow-md border text-white  text-sm font-medium rounded-md hover:bg-orange-600 transition duration-300">
          Filter
        </button>
      </div>

      {/* Table section */}
      <div className="overflow-x-auto shadow-md rounded-lg ">
        <table className="min-w-full border-collapse    border border-gray-200">
          <thead className="bg-indigo-100 text-indigo-800">
            <tr className='text-sm font-medium'>
              <th className="px-6 py-3 border-b text-center">Date</th>
              <th className="px-6 py-3 border-b text-center">Name</th>
              <th className="px-6 py-3 border-b text-center">Start Time</th>
              <th className="px-6 py-3 border-b text-center">End Time</th>
              <th className="px-6 py-3 border-b text-center">Working Hours</th>
              <th className="px-6 py-3 border-b text-center">Status</th>
            </tr>
          </thead>
          <tbody className='text-sm font-sm bg-white'>
            {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 border-b text-center">{row.date}</td>
                <td className="px-6 py-4 border-b text-center">{row.name}</td>
                <td className="px-6 py-4 border-b text-center">{row.starttime}</td>
                <td className="px-6 py-4 border-b text-center">{row.endtime}</td>
                <td className="px-6 py-4 border-b text-center">{row.workinghr}</td>
                <td className={`px-6 py-4 border-b text-center font-semibold ${row.status === "Completed" ? "text-green-500" : "text-red-500"}`}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stats Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
          <p className="text-sm font-medium">Total Present</p>
          <p className="text-sm font-medium text-green-600">50</p>
        </div>

        <div className="bg-red-100 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
          <p className="text-sm font-medium">Total Absent</p>
          <p className="text-sm font-medium text-red-600">50</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
          <p className="text-sm font-medium">On Leave</p>
          <p className="text-sm font-medium text-yellow-600">50</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
          <p className="text-sm font-medium">Late Arrival</p>
          <p className="text-sm font-medium text-blue-600">49</p>
        </div>

        <div className="bg-green-100 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
          <p className="text-sm font-medium">On Time</p>
          <p className="text-sm font-medium text-green-600">60</p>
        </div>
      </div>
    </div>
    </main>
  );
};

export default Home;
