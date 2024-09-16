// components/GrowthSection.js
import React from 'react';

const GrowthSection = ({investor}) => {
  const investorData = investor?.data?.[0];
  return (
    <section className="growth-section container">
      <p className="growth-intro">
       {investorData?.field3}
      </p>
      <div className="growth-cards">
        <div className="growth-card">
        <img src='/robust.png'/>
          <h4>{investorData?.field4}</h4>
          <div dangerouslySetInnerHTML={{ __html: investorData?.field5 }} />       
        </div>
        <div className="growth-card">
        <img src='/robust.png'/>
          <h4>{investorData?.field6}</h4>
         
          <div dangerouslySetInnerHTML={{ __html: investorData?.field7 }} />
          
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
