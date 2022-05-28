import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import SignUp from './components/Auth/SignUp/SignUp1';
import Login from './components/Auth/Login/Login1';
import Otp from './components/Auth/OTP/OTP';
import Forgot from "./components/Auth/ForgotPass/ForgotPass"
import HomePage from './components/Layout/Homepage/HomePage';

function App() {
  return ( <>
       <Routes>
         {/* Auth Routes */}
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/otp" element={<Otp />} />
        <Route exact path="/forgot" element={<Forgot/>} />
      </Routes>
    </>
  );
}

export default App;
