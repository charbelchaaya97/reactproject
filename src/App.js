// App.js
import { Routes, Route } from "react-router-dom";
import Employees from "./Employees"; 
import LoginPage from "./LoginPage"; 
import Createaccount from "./Createaccount";
import Timesheets from './timesheets';
import { useState } from 'react';



const App = () => {
  const [employees] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ]);

  const [timesheets, setTimesheets] = useState([]);

 
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/employee" element={<Employees />} />
      <Route path="/createaccount" element={<Createaccount />} />
      <Route path="/timesheets" element={<Timesheets />}/>
        
   
      {/* Add routes for the new employee page and timesheet page */}
    </Routes>
  );
}

export default App;

