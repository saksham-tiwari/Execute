import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import SignUp from './components/auth/SignUp/SignUp';
import Login from './components/auth/Login/Login';
import Otp from './components/auth/OTP/OTP';
import Forgot from './components/auth/ForgotPass/ForgotPass';
import ResetPass from './components/auth/ForgotPass/ResetPass';
import Details from './components/auth/Detail/Detail';
import QrScanner from './components/layout/QR-Code/QR-Scan';
function App() {
  return ( <>
       <Routes>
         {/* Auth Routes */}
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/otp" element={<Otp />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/reset" element={<ResetPass />} />
        <Route exact path="/detail" element={<Details />} />

        {/* Layout Routes */}
        <Route exact path="/qrcode" element={<QrScanner />} />
      </Routes>
    </>
  );
}

export default App;
