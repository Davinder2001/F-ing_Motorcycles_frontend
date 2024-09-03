import React from 'react';

const ControlProducts = () => {
  return (
    <section className="controlProducts container">
      <div className="textContainer hero_sction">
        <h1>
          Innovative Control Products <br /> for <span className="highlight">Electric Scooter</span>
        </h1>
        <p>
          Uzaq is revolutionizing the Indian automotive industry with its innovative in-house developed hybrid powertrain technology. Our advanced system, which includes a state-of-the-art ECU, proprietary firmware, and seamless hardware integration etc....
        </p>
        <button className="enquiry-button"> 
          <img src='/enquiry.png'/> Enquiry Now
        </button>
      </div>
      <div className="imageContainer">
         <img src="/bike.png" alt="Electric Scooter" className="scooterImage"/>       
      </div>
    </section>
  );
};

export default ControlProducts;
