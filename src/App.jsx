import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Home from './component/Home'; // Assuming you have Home component
import Login from './component/Login';
import Signup from './component/Signup';
import Navebar from './component/Navebar';
import Dashboard from './component/Dashbord';
import EmployeeManagementPage from './component/EmpManagement';
import ProfilePage from './component/Profile';
import AdminAttendanceDashboard from './component/AB';

function App() {
  return (
    <Router>
      <div className=''>
        {/* Navbar is always visible */}
        <Navebar  className="w-1/4 bg-gray-800 text-white p-6" />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<Signup />} /> {/* Signup page */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Signup page */}
          <Route path="/empmanage" element={<EmployeeManagementPage />} /> {/* Signup page */}  
          <Route path="/profile" element={<ProfilePage />} /> {/* Signup page */} 
          <Route path="/admin" element={<AdminAttendanceDashboard/>} /> {/* Signup page */}  
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
