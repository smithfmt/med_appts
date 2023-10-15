import { useState } from "react";
import "./ReviewForm.css";
import ReviewFormPopup from "../ReviewFormPopup/ReviewFormPopup";

const doctors = [
    {
        name: "James Doe",
        special: "Dentist",
        review: "",
    },
    {
        name: "Jaou Rouge",
        special: "Cardiology",
        review: "",
    }
]

const ReviewForm = () => {

    const [reviewing, setReviewing] = useState(false);
    return(
        <>
        <div className="form-container">
            <h1>Reviews</h1>
            <table>
                <tr>
                    <th>Serial Number</th>
                    <th>Doctor Name</th>
                    <th>Doctor Speciality</th>
                    <th>Provide Feedback</th>
                    <th>Review Given</th>
                </tr>
                {doctors.map((doctor, index) => {
                    return (
                        <tr>
                            <td>{index}</td>
                            <td>Dr. {doctor.name}</td>
                            <td>{doctor.special}</td>
                            <td>{doctor.review? "" : <button onClick={() => setReviewing(true)}>Click Here</button>}</td>
                            <td>{doctor.review || ""}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        {reviewing?<ReviewFormPopup /> : <></>}
        </>
        
    );
};

export default ReviewForm;