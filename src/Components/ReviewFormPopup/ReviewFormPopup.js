import "./ReviewFormPopup.css";

import React, { useState } from 'react';
function ReviewFormPopup() {
  const [showForm, setShowForm] = useState(true);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 0
      });
  const handleButtonClick = () => {
    setShowForm(true);
  };
  const handleChange = (e) => {
    setFormData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    setFormData('');
        if (formData.name && formData.review && formData.rating > 0) {
          setShowWarning(false);
        } else {
          setShowWarning(true);
        }
  };
  return (
    <div className="review-form-popup">
      <h2>Review</h2>
      {!showForm ? (
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
               {showWarning && <p className="warning">Please fill out all fields.</p>}
                <div>
                   <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
             </div>
                <div>
                 <label htmlFor="review">Review:</label>
                  <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
                 </div>
                 <div>
                 <label htmlFor="review">Rating:</label>
                  <p>⭐⭐⭐⭐⭐</p>
                 </div>
                 <button disabled={!!submittedMessage} type="submit">Submit</button>
               </form>
      )}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}
export default ReviewFormPopup;


// const ReviewFormPopup = () => {
//     return (
//         <form className="review-form-popup">
//             <h2>Leave a Review:</h2>
//             <label>Name:</label>
//             <input type="name"/>
//             <label>Review:</label>
//             <textarea name="review"/>
//             <button type="submit">Submit!</button>
//         </form>
//     );
// };

// export default ReviewFormPopup;