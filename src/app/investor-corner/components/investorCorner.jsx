import React from 'react';
import Image from 'next/image';

const InvestorSection = () => {
  return (
    <section className="investor-corner ">
     <div className="invertor_inner_section container"> 
      <img src='/dotsback.png' className='custom_dot_section'></img>
      <div className="investor-image">
        <img src="/investor.png" alt="Investor Working" />
      </div>
      <div className="investor-content">
        <h3>Our Investor's Corner</h3>
        <h5>
          At Uzaq, we are at the forefront of revolutionizing the Indian automotive
          industry with our cutting-edge hybrid powertrain technology. Our proprietary
          system, featuring an advanced ECU, innovative firmware, and seamless hardware
          integration, represents a significant leap forward in performance and sustainability.
        </h5>
        <p>
          At Uzaq, we're leading a transformation in the Indian automotive sector with
          our cutting-edge hybrid powertrain technology. Our pioneering system features
          a sophisticated ECU, exclusive firmware, and seamless hardware integration,
          all meticulously developed in-house. This innovative approach not only enhances
          vehicle performance and efficiency but also sets new standards for sustainability
          and reliability in the industry. With Uzaq, investors are part of a forward-thinking
          company that's driving the future of automotive innovation in India.
        </p>
      </div>
   </div>  
    </section>
  );
};

export default InvestorSection;
