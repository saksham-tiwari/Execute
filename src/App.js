import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import SignUp from './components/Auth/SignUp/SignUp';
import Login from './components/Auth/Login/Login';
import Otp from './components/Auth/OTP/OTP';
import Forgot from "./components/Auth/ForgotPass/ForgotPass"
import HomePage from './components/Layout/Homepage/HomePage';
import StorePage from './components/Layout/StorePage/StorePage';
import CreateStore from './components/Layout/CreateStore/CreateStore';

function App() {
  return ( <>
       <Routes>
         {/* Auth Routes */}
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/otp" element={<Otp />} />
        <Route exact path="/forgot" element={<Forgot/>} />
        <Route exact path="/store/:id" element={<StorePage/>}/>
        <Route exact path="/create-store" element={<CreateStore/>}/>
      </Routes>
    </>
  );
}

export default App;
