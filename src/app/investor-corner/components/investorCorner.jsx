import React from 'react';
import Image from 'next/image';

const InvestorSection = ({investor}) => {

  const investorData = investor?.data?.[0];

  return (
    <section className="investor-corner ">
     <div className="invertor_inner_section container"> 
      <img src='/dotsback.png' className='custom_dot_section'></img>
      <div className="investor-image">
      <Image 
            src={investorData?.image} 
            alt="Investor" 
            width={500} 
            height={300} 
            layout="responsive"
          />
      </div>
      <div className="investor-content">
        <h3>{investorData?.field1}</h3>
        <div dangerouslySetInnerHTML={{ __html: investorData?.field2 }} />
      </div>
   </div>  
    </section>
  );
};

export default InvestorSection;
