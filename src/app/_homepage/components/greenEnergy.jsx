import React, { useState, useEffect } from "react";

const GreenEnergy = ({ greenEnergy, greenEnergySlider }) => {
  const sliderData = greenEnergySlider.data || [];
  const contData = greenEnergy.data?.[0] || [];

  // Set the interval duration (5 seconds)
  const slideIntervalDuration = 5000; // 5 seconds

  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect to handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length); // Loop back to first slide
    }, slideIntervalDuration);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [sliderData.length]); // Re-run effect if sliderData changes

  return (
    <div className="container">
    <div className="phenomenon-section">
    <img className="background-line-img" src="/linesg.png"/>
        <h2>
          Plugin/strong Hybrids: Global{" "}
          <span className="highlight">Phenomenon</span>
        </h2>
        <div className="phenomenon-content">
          <div className="phenomenon-left-side">
            <div className="long-description">
              <p
                dangerouslySetInnerHTML={{
                  __html: greenEnergy?.data?.[0]?.long_description,
                }}
              />
            </div>
            <div className="short-description">
              <p
                dangerouslySetInnerHTML={{
                  __html: greenEnergy?.data?.[0]?.short_description,
                }}
              />
            </div>
          </div>
          <div className="phenomenon-right-side">
          
                <div className="slider" style={{ backgroundImage: `url(${contData.image})` }}>
                  {sliderData.length > 0 ? (
                    <img
                      src={sliderData[currentSlide].image}
                      alt={sliderData[currentSlide].heading}
                    />
                  ) : (
                    <p>No images available</p> // Message when there are no images
                  )}
                </div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenEnergy;
