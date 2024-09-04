import React from 'react';
import Image from "next/image";

const ControlProducts = ({result}) => {
  console.log(result)
  return (
    <section className="controlProducts container">
      <div className="textContainer hero_sction">
        <h1>
          {result?.heading} <br /> for <span className="highlight">{result?.heading_nxt}</span>
        </h1>
        <p>
        {result?.description}
        </p>
        <button className="enquiry-button"> 
          <img src='/enquiry.png'/> Enquiry Now
        </button>
      </div>
      <div className="imageContainer">
      <Image src={result?.image}  height={400} width={500}/>      
      </div>
    </section>
  );
};

export default ControlProducts;
