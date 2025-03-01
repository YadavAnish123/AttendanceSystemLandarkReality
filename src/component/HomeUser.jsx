import React, { useState } from 'react'

const HomeUser = () => {
  const [checkInTime, setCheckInTime] = useState(null)
  const [checkOutTime, setCheckOutTime] = useState(null)
  const [isCheckedIn, setIsCheckedIn] = useState(false)

  // New state for leave application
  const [leaveForm, setLeaveForm] = useState({
    fromDate: '',
    toDate: '',
    leaveType: '',
    reason: ''
  })
  const [leaveRequestSubmitted, setLeaveRequestSubmitted] = useState(false)
  const [leaveHistory, setLeaveHistory] = useState([
    {
      fromDate: '2025-03-01',
      toDate: '2025-03-05',
      leaveType: 'Vacation',
      reason: 'Family Trip',
      status: 'Pending'
    },
    {
      fromDate: '2025-02-10',
      toDate: '2025-02-12',
      leaveType: 'Sick Leave',
      reason: 'Medical Condition',
      status: 'Approved'
    }
  ])

  const handleCheckIn = () => {
    const time = new Date().toLocaleTimeString()
    setCheckInTime(time)
    setIsCheckedIn(true)
  }

  const handleCheckOut = () => {
    const time = new Date().toLocaleTimeString()
    setCheckOutTime(time)
    setIsCheckedIn(false)
  }

  // Handle leave form changes
  const handleLeaveChange = (e) => {
    const { name, value } = e.target
    setLeaveForm({
      ...leaveForm,
      [name]: value
    })
  }

  // Handle leave form submission
  const handleLeaveSubmit = (e) => {
    e.preventDefault()
    // Add the submitted leave request to history
    setLeaveHistory([
      ...leaveHistory,
      {
        fromDate: leaveForm.fromDate,
        toDate: leaveForm.toDate,
        leaveType: leaveForm.leaveType,
        reason: leaveForm.reason,
        status: 'Pending'
      }
    ])
    setLeaveRequestSubmitted(true)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-indigo-200 p-6">
      {/* remainig leaves */}


     
      {/* Flex container for Attendance and Attendance History side by side */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-10 mt-8">
        {/* Attendance Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Attendance</h1>
          
          {!isCheckedIn ? (
            <button 
              onClick={handleCheckIn} 
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
            >
              Check In
            </button>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-4">Checked in at: <span className="font-semibold">{checkInTime}</span></p>
              <button 
                onClick={handleCheckOut} 
                className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200"
              >
                Check Out
              </button>
            </div>
          )}

          {checkOutTime && (
            <p className="mt-4 text-center text-gray-600">Checked out at: <span className="font-semibold">{checkOutTime}</span></p>
          )}
        </div>

        {/* Attendance History Section */}
        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Attendance History</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-indigo-500 rounded-lg shadow-md">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-medium">Date</th>
                  <th className="py-3 px-6 text-left text-sm font-medium">Check In</th>
                  <th className="py-3 px-6 text-left text-sm font-medium">Check Out</th>
                  <th className="py-3 px-6 text-left text-sm font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Data */}
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className="bg-white border-b hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-6 text-sm text-gray-700">2025-02-27</td>
                    <td className="py-3 px-6 text-sm text-gray-700">2025-02-27 10:30:00</td>
                    <td className="py-3 px-6 text-sm text-gray-700">2025-02-27 6:30:00</td>
                    <td className="py-3 px-6 text-sm text-gray-700">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">Completed</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Apply for Leave Section */}
      <div className="w-full max-w-6xl mt-10 flex flex-col md:flex-row justify-between gap-10">
        {/* Apply for Leave Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Apply for Leave</h2>
          
          {leaveRequestSubmitted ? (
            <div className="text-center text-green-500">
              <p>Your leave request has been submitted successfully!</p>
            </div>
          ) : (
            <form onSubmit={handleLeaveSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fromDate">
                  From Date
                </label>
                <input 
                  type="date" 
                  id="fromDate" 
                  name="fromDate" 
                  value={leaveForm.fromDate} 
                  onChange={handleLeaveChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="toDate">
                  To Date
                </label>
                <input 
                  type="date" 
                  id="toDate" 
                  name="toDate" 
                  value={leaveForm.toDate} 
                  onChange={handleLeaveChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="leaveType">
                  Leave Type
                </label>
                <select 
                  id="leaveType" 
                  name="leaveType" 
                  value={leaveForm.leaveType} 
                  onChange={handleLeaveChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select Leave Type</option>
                  <option value="vacation">Vacation</option>
                  <option value="sick">Sick Leave</option>
                  <option value="personal">Personal Leave</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="reason">
                  Reason for Leave
                </label>
                <textarea 
                  id="reason" 
                  name="reason" 
                  value={leaveForm.reason} 
                  onChange={handleLeaveChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
              >
                Submit Leave Request
              </button>
            </form>
          )}
        </div>

        {/* Leave Application History Table */}
        <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Leave History</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-indigo-500 rounded-lg shadow-md">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-medium">From Date</th>
                  <th className="py-3 px-6 text-left text-sm font-medium">To Date</th>
                  <th className="py-3 px-6 text-left text-sm font-medium">Leave Type</th>
                  <th className="py-3 px-6 text-left text-sm font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {leaveHistory.map((leave, index) => (
                  <tr key={index} className="bg-white border-b hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-6 text-sm text-gray-700">{leave.fromDate}</td>
                    <td className="py-3 px-6 text-sm text-gray-700">{leave.toDate}</td>
                    <td className="py-3 px-6 text-sm text-gray-700">{leave.leaveType}</td>
                    <td className="py-3 px-6 text-sm text-gray-700">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${leave.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                        {leave.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeUser
