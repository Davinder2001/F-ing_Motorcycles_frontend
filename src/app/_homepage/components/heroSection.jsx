'use client';
import { useState, useEffect } from 'react';
import PopupForm from '@/app/_common/layout/popup';

const SliderComponent = ({ result, heroSection }) => {
  const [activeSlide, setActiveSlide] = useState(0); // Default to the first slide
  const [highlightText, setHighlightText] = useState(' ScooteElectricr'); // Text to type out
  const textArray = [`${result.heading_nxt}`, 'Electric Bike',]; // Array of texts to loop

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed of typing in ms
  const deletingSpeed = 50; // Speed of deleting in ms
  const pauseTime = 1500; // Time to wait before deleting the text
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const hasImages = heroSection && heroSection.length > 0;

  useEffect(() => {
    if (hasImages) {
      // Log image URLs for all items in heroSection
      heroSection.forEach((item, index) => {
        `Image URL for item ${index}:`, item.image;
      });
    } else {
      // console.log('Hero section data is not available or empty.');
    }
  }, [heroSection, hasImages]);

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[currentTextIndex];

      if (!isDeleting) {
        setTypedText((prevText) => currentText.substring(0, prevText.length + 1));

        if (typedText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setTypedText((prevText) => currentText.substring(0, prevText.length - 1));

        if (typedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [typedText, isDeleting]);

  useEffect(() => {
    if (hasImages) {
      const slideInterval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % heroSection.length);
      }, 3000); // 3000ms = 3 seconds

      return () => clearInterval(slideInterval); // Cleanup interval on unmount
    }
  }, [hasImages, heroSection]);

  // Get the current image URL based on activeSlide
  const getImageForSlide = () => {
    if (hasImages) {
      return heroSection[activeSlide]?.image || '/slidethree.png'; // Fallback if needed
    }
    return '/slidethree.png'; // Fallback if heroSection is empty
  };
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

 

  return (
    <div className="slider-container">
      <div className="slider-content container">
        <div className="hero_slider">
          <div className="left_side_panel">
            <h2 className="title">
              {result.heading} <span className="highlight">{typedText}</span>
            </h2>
            <div>
           
            <div className="description" dangerouslySetInnerHTML={{ __html: result?.description || '' }} />
        </div>
        <button className="enquiry-button" onClick={openPopup}>
                <img src="/enquiry.png" alt="Enquiry" /> Enquiry Now
              </button>
          </div>

          {hasImages && (
            <div className="images_right">
              <img src={getImageForSlide()} alt={`Slide ${activeSlide}`} className="vehicle-image" />
            </div>
          )}

        </div>

        {hasImages && (
          <div className="slider-navigation">
            {heroSection.map((_, index) => (
              <button
                key={index}
                className={`slider-button ${activeSlide === index ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              >
                <span>{index + 2}</span> Wheelers
              </button>
            ))}
          </div>
        )}
        {isPopupOpen && <PopupForm closeForm={closePopup} />} 
      </div>
    </div>
  );
};

export default SliderComponent;
