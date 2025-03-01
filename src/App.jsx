import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Home from './component/Home'; // Assuming you have Home component
import Login from './component/Login';
import Signup from './component/Signup';
import Navebar from './component/Navebar';
import Dashboard from './component/Dashbord';
import EmployeeManagementPage from './component/EmpManagement';
import ProfilePage from './component/Profile';
import AdminAttendanceDashboard from './component/AB';
import HomeUser from './component/HomeUser';
import SalaryPage from './component/Salary';
function App() {
  return (
    <Router>
      <div className=''>
        <Navebar  className="w-1/4 bg-gray-800 text-white p-6" />
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/empmanage" element={<EmployeeManagementPage />} />   
          <Route path="/profile" element={<ProfilePage />} /> 
          <Route path="/admin" element={<AdminAttendanceDashboard/>} /> Attendence
          <Route path="/homeuser" element={<HomeUser/>} />
          <Route path="/salary" element={<SalaryPage/>} />

           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
