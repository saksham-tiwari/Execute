import React from 'react'
import illustrate from '../../Assets/logo1.svg'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const signingOut = () => {
        localStorage.clear();
        navigate("/login");
    }

const qrScan = () => {
    navigate("/qrcode");
}
const logoClick = () =>{
    navigate("/login");
}
    return (
        <div className='Navbar'>
            <div className='logo' onClick={logoClick}>
                <div className='logo-image'>
                    <img className="image" src={illustrate} alt="logo" />
                </div>
                <div className='logo-head'>
                    <p>Qwait?</p>
                </div>

            </div>
            <div className='Nav-menu'>
<<<<<<< HEAD:src/components/layout/Navbar/Navbar.js
                <div className='sign-out' style={{order: "2"}} onClick={signingOut}>
                    <i class="fa fa-sign-out" aria-hidden="true" style={{ color: "white", fontSize: "2.2em", cursor: "pointer" }}></i>
                </div>
                <div className='qr-code' style={{order: "1"}} onClick={qrScan}>
                     <i class="fa fa-qrcode" aria-hidden="true" style={{ color: "white", fontSize: "2.2em", cursor: "pointer"}}></i>
                </div>
                {/* <LogoutIcon style={{color:"white"}} fontSize="large"/> */}
=======
                <i class="fa fa-sign-out" aria-hidden="true" style={{ color: "white", fontSize: "2.2em" }}></i>
>>>>>>> 5f2ca46fc3b9c9cb915e906e224ca6b36f82dc70:src/components/Layout/Navbar/Navbar.js
            </div>
        </div>
    )
}

export default Navbar