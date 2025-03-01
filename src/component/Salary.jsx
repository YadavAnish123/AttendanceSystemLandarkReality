import React, { useState } from 'react';

const SalaryPage = () => {
  const [salaryData] = useState([
    { date: '2025-02-01', month: 'February 2025', salary: '5000', status: 'Paid' },
    { date: '2025-01-01', month: 'January 2025', salary: '5000', status: 'Paid' },
    { date: '2024-12-01', month: 'December 2024', salary: '5000', status: 'Unpaid' },
    // Add more rows as necessary
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-indigo-200 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Salary History</h1>
        
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-indigo-500 rounded-lg shadow-md">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium">Date</th>
                <th className="py-3 px-6 text-left text-sm font-medium">Month</th>
                <th className="py-3 px-6 text-left text-sm font-medium">Salary</th>
                <th className="py-3 px-6 text-left text-sm font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {salaryData.map((data, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-6 text-sm text-gray-700">{data.date}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">{data.month}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">${data.salary}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${data.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {data.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalaryPage;
