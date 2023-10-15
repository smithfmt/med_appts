import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from "./Components/ReviewForm/ReviewForm";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Notification>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/reviews" element={<ReviewForm/>}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/search/doctors" element={<BookingConsultation />} />
            </Routes>
            </Notification>
        </BrowserRouter>
    </div>
  );
}
export default App;