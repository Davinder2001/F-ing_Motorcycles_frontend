import React from "react";
import { useRouter } from 'next/navigation'; // Import useRouter for redirection

const HybridInfo = ({ category }) => {
  const router = useRouter();

  // Handle click on a card and redirect with category ID
  const handleCardClick = (catId) => {
    router.push(`/products?id=${catId}`); // Redirect with ?id= format
  };
  
  return (
    <div className="what_we_provide">
      <div className="weprovide container">
        <h2 className="title">
          What We <span className="highlight">Provide</span>
        </h2>
        <div className="grid">
          {category?.map((category, index) => (
            <div 
              key={index} 
              className="card" 
              style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickability
              onClick={() => handleCardClick(category.id)} // Handle card click
            >
              <img src="/linesg.png" className="line_absolute" alt="decoration" />
              <h3 className="cardTitle">
                {category.name}
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
