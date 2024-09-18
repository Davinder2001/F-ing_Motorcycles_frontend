import { useState } from 'react';
import { EXPORT_ALL_APIS } from '../../../../utils/apis/apis';

const api = EXPORT_ALL_APIS();

const PopupForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedIn: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
        const response = await api.createFormEnquery(token, formData);

          // Assuming response has an 'ok' property; adjust based on actual response
        if (response && response.ok) {
            alert('Enquiry submitted successfully');
            setFormData({ name: '', email: '', phone: '', interestedIn: '', message: '' });
            closeForm(); // Close the popup
        } else {
            const errorText = await response.text(); // Parse text if response is not OK
            alert('Error submitting enquiry: ' + errorText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again.');
    }
};


  return (
    <div className="popup-form-overlay">
      <div className="popup-form">
        <img className="line_popup" src="/linepopup.png" alt="Line Popup" />
        <button className="close-btn" onClick={closeForm}>
          <img src='/close.png' alt="Close" />
        </button>
        <h2>Send Us An Enquiry</h2>
        <form className='custom_popup_form' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="interestedIn">Interested In</label>
            <select
              id="interestedIn"
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
            >
              <option value="Mild Hybrid">Mild Hybrid (MHEV)</option>
              <option value="Full Hybrid">Full Hybrid (HEV)</option>
              <option value="Plug-in Hybrid">Plug-in Hybrid (PHEV)</option>
              <option value="Range-Extended">Range-Extended Electric Vehicle (REEV)</option>
              <option value="CNG Hybrid">CNG Hybrid</option>
              <option value="Parallel Hybrid">Parallel Hybrid</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Enter Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
