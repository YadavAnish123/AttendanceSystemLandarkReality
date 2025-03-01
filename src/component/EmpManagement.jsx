import React, { useState } from 'react';

const EmployeeManagementPage = () => {
  const [employees, setEmployees] = useState([]); // Employee list
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    department: '',
    designation: '',
    status: 'active',
    joiningDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // Edit employee
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === formData.id ? { ...emp, ...formData } : emp
        )
      );
    } else {
      // Add new employee
      setEmployees([ ...employees, { ...formData, id: Date.now() } ]); // Auto-generate a unique ID
    }
    setFormData({
      id: '',
      name: '',
      department: '',
      designation: '',
      status: 'active',
      joiningDate: '',
    });
  };

  const handleEdit = (employee) => {
    setFormData(employee); // Pre-fill the form with employee details for editing
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id)); // Delete employee
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 min-h-screen p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Form Section */}
        <div className="bg-white mt-12 dark:bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 sm:mb-0 sm:w-1/3 sm:fixed sm:left-6 sm:top-6">
          <form onSubmit={handleSubmit} className="space-y-1">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white h-10"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white h-10"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white h-10"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Joining Date
              </label>
              <input
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white h-10"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full mt-6 p-3 min-h-[2.5rem] bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              {formData.id ? 'Update Employee' : 'Add Employee'}
            </button>
          </form>
        </div>

        {/* Employee Table Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl sm:ml-[calc(33.333%+2rem)]">
          <h2 className="text-sm font-bold text-indigo-800 dark:text-white mb-2">
            Employee List
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="py-3 px-4 border-b text-left text-sm font-semibold text-indigo-800 dark:text-white">
                    Name
                  </th>
                  <th className="py-3 px-4 border-b text-left text-sm font-semibold text-indigo-800 dark:text-white">
                    Department
                  </th>
                  <th className="py-3 px-4 border-b text-left text-sm font-semibold text-indigo-800 dark:text-white">
                    Designation
                  </th>
                  <th className="py-3 px-4 border-b text-left text-sm font-semibold text-indigo-800 dark:text-white">
                    Status
                  </th>
                  <th className="py-3 px-4 border-b text-left text-sm font-semibold text-indigo-800 dark:text-white">
                    Joining Date
                  </th>
                  <th className="py-3 px-4 border-b text-left text-sm font-semibold text-indigo-800 dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-300">
                      {employee.name}
                    </td>
                    <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-300">
                      {employee.department}
                    </td>
                    <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-300">
                      {employee.designation}
                    </td>
                    <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-300">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          employee.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b text-sm text-gray-700 dark:text-gray-300">
                      {employee.joiningDate}
                    </td>
                    <td className="py-3 px-4 border-b text-sm">
                      <button
                        onClick={() => handleEdit(employee)}
                        className="text-indigo-600 hover:text-indigo-800 mr-4 transition-colors duration-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(employee.id)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagementPage;
