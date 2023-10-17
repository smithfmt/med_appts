import React, { useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();
    
    const register = async (e) => {
        e.preventDefault();
        // API Call
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });
        const json = await response.json();
        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            // phone and email
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect to home page
            navigate("/");   //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
            window.location.reload();
        } else {
            if (json.errors) {
                // Join the error messages into a single string
                const errorMessages = json.errors.map((error) => error.msg).join(' ');
                setShowerr(errorMessages);
            } else {
                setShowerr(json.error || ''); // Ensure that showerr is a string
            }
        }
    };
    return (
        <div className="container" style={{marginTop:'5%'}}>
        <div className="signup-grid">
        <div class="signup-text">
            <h1>Sign Up</h1>
        </div>
        <div class="signup-text1" style={{textAlign: "left"}}>
            Already a member? <span><a href="../Login/Login.html" style={{color: "#2190FF"}}> Login</a></span>
        </div>
        <div className="signup-form">
         <form method="POST" onSubmit={register}>
           <div className="form-group">
                <label htmlFor="email">Email</label>
                    <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="form-control" 
                    placeholder="Enter your email" 
                    aria-describedby="helpId" 
                    />
                 {showerr && <div className="err" style={{ color: 'red' }}>{JSON.stringify(showerr)}</div>}
            </div>
            <div className="form-group">
                <label for="name">Name</label>
                <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                name="name" 
                id="name" 
                required 
                minLength={4}
                className="form-control" 
                placeholder="Enter your name" 
                aria-describedby="helpId" 
                />
            </div>
            <div className="form-group">
                <label for="phone">Phone</label>
                <input 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                type="tel" 
                name="phone" 
                id="phone" 
                required 
                className="form-control" 
                placeholder="Enter your phone number" 
                aria-describedby="helpId" 
                />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                name="password" 
                id="password" 
                required 
                minLength={8}
                className="form-control" 
                placeholder="Enter your password" 
                aria-describedby="helpId" 
                />
            </div>
            <div className="btn-group">
                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
            </div>
         </form>
         </div>
         </div>
         </div>
 //Sign up role is not stored in database. You can apply logic for this according to your react code.
    );
}
export default Sign_Up;