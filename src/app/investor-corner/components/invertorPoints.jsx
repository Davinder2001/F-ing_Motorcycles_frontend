// components/GrowthSection.js
import React from 'react';

const GrowthSection = () => {
  return (
    <section className="growth-section container">
      <p className="growth-intro">
        We see a great opportunity to grow into a substantially-sized, high ROCE
        business that sells differentiated products to global leaders across multiple industries.
      </p>
      <div className="growth-cards">
        <div className="growth-card">
        <img src='/robust.png'/>
          <h4>Innovative Hybrid  <span>Powertrain Technology</span></h4>
          <p>
          We are driving the future of the Indian automotive industry with our cutting-edge hybrid powertrain system.
           Our proprietary ECU, coupled with state-of-the-art firmware and hardware integration, delivers unparalleled performance, efficiency, and sustainability. Uzaq is setting new standards in automotive technology.
          </p>         
        </div>
        <div className="growth-card">
        <img src='/robust.png'/>
          <h4>Transforming Automotive <span>Performance and Sustainability</span></h4>
          <p>
          Our pioneering hybrid powertrain technology is a game-changer in the industry. Uzaq’s in-house developed ECU, innovative firmware, and seamless hardware integration redefine vehicle reliability and sustainability.
           Join us in revolutionizing automotive performance in India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
