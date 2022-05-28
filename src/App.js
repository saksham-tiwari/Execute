import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import SignUp from './components/Auth/SignUp/SignUp';
import Login from './components/Auth/Login/Login';
import Otp from './components/Auth/OTP/OTP';
import Forgot from './components/Auth/ForgotPass/ForgotPass';
import ResetPass from './components/Auth/ForgotPass/ResetPass';
import Details from './components/Auth/Detail/Detail';
import QrScanner from './components/Layout/QR-Code/QR-Scan';
import HomePage from './components/Layout/Homepage/HomePage';
import StorePage from './components/Layout/StorePage/StorePage';
function App() {
  return ( <>
       <Routes>
         {/* Auth Routes */}
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/store/:id" element={<StorePage/>}/>
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
