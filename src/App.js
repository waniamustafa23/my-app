import React, { useState, useEffect } from 'react'; // Import React and hooks
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import './App.css';
import Dashboard from './Components/Dashboard';
import SplashScreen from './Components/SplashScreen';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds ke baad splash screen hat jayegi
  }, []);

  return (
    <Router>
      <div>
        {loading ? (
          <SplashScreen />
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
