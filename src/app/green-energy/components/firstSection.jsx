import React from "react";

const FirstSection = ({ greenEnergy }) => {
  const data = greenEnergy?.data[0];
  return (
    <div className="green-energy-first-section">
      {/* <h3>{data?.name}</h3>
    <div className="main-content">
      <div className="img-column">
      <img src={data?.image} alt="img" />

      </div>
      <div className="content-section">
      <p>{data?.short_description}</p>
      <p>{data?.long_description}</p> */}

      {/* </div> */}

    {/* </div> */}
    <section className="investor-corner ">
     <div className="invertor_inner_section container"> 
      <img src='/dotsback.png' className='custom_dot_section'></img>
      <div className="investor-image">
            <img src={data?.image} alt="Investor" />
      </div>
      <div className="investor-content">
        <h3>{data?.name}</h3>
        <div><p>{data?.short_description}</p>
        <p>{data?.long_description}</p></div>
      </div>
   </div>  
    </section>
    </div>
  );
};

export default FirstSection;
