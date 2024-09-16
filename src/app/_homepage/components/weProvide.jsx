
import React from "react";


const HybridInfo = ({category}) => {

  return (

  <div className="what_we_provide ">
    <div className=" weprovide container">
      <h2 className="title">
        What We <span className="highlight">Provide</span>
      </h2>
      <div className="grid">
        {category?.map((category, index) => (
          <div key={index} className="card">
            <img src="/linesg.png" className="line_absolute"/>
            <h3 className="cardTitle">
              {category.name} 
              {/* <span className="abbreviation">{hybrid.abbreviation}</span> */}
            </h3>
            <p className="description">{category.short_description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>  
  );
};

export default HybridInfo;
