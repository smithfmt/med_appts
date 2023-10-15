import "./Navbar.css";
import React from "react";

const handleClick = () => {}

const NavBar = () => {
    return (
        <nav>
            <div className="nav__logo">
                <a href="/">
                    <span className="emph">Heal</span><span>Yourself</span> <img src="https://res.cloudinary.com/dcrome1pq/image/upload/v1697381039/Capstone/Logo.svg" alt="doctor_icon" />
                </a>
            </div>
            <div className="nav__icon" onClick={handleClick}>
            <i className="fa fa-times fa fa-bars"></i>
            </div>
            <ul className="nav__links active">
            <li className="link">
                <a href="/">Home</a>
            </li>
            <li className="link">
                <a href="#">Appointments</a>
            </li>
                <li className="link">
                    <a href="/signup">
                    <button className="btn1">Sign Up</button>
                    </a>
                </li>
                <li className="link">
                    <a href="/login">
                    <button className="btn1">Login</button>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;