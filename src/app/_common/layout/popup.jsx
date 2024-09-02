import { useState } from 'react';

const PopupForm = ({ closeForm }) => {
  return (
    <div className="popup-form-overlay">

      
      <div className="popup-form">
      <img className="line_popup" src="/linepopup.png"/>
        <button className="close-btn" onClick={closeForm}><img src='/close.png'/></button>
        <h2>Send Us An Enquiry</h2>
        <form className='custom_popup_form'>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="interestedIn">Interested In</label>
            <select id="interestedIn" name="interestedIn">
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
            <textarea id="message" name="message" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
     
    </div>
  );
};

export default PopupForm;
