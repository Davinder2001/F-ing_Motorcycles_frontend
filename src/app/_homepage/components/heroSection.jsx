'use client';
import { useState, useEffect } from 'react';

const SliderComponent = () => {
  const [activeSlide, setActiveSlide] = useState(2); // Default is 2 Wheelers
  const [highlightText, setHighlightText] = useState('Electric Scooter'); // Text to type out
  const textArray = ['Electric Scooter', 'Electric Bike', 'Hybrid Vehicle']; // Array of texts to loop

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed of typing in ms
  const deletingSpeed = 50; // Speed of deleting in ms
  const pauseTime = 1500; // Time to wait before deleting the text

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

  // Automatically switch slides every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prevSlide) => {
        if (prevSlide === 4) {
          return 2; // Cycle back to 2 if currently at 4
        }
        return prevSlide + 1; // Go to the next slide (2 -> 3 -> 4)
      });
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-content container">
        <div className="hero_slider">
          <div className="left_side_panel">
            <h2 className="title">
              Innovative Control Products for <span className="highlight">{typedText}</span>
            </h2>
            <p className="description">
              We are revolutionizing the Automotive market with Innovation in Design & Integration
              services for Hybrid Powertrain technology. Our patented tech and years of experience in
              the automotive sector.
            </p>
            <button className="enquiry-button">
              <img src="/enquiry.png" alt="enquiry" /> Enquiry Now
            </button>
          </div>

          <div className="images_right">
            {activeSlide === 2 && (
              <>
                <img src="/slideone.png" alt="2 wheeler" className="vehicle-image" />
              </>
            )}
            {activeSlide === 3 && (
              <>
                <img src="/slidetwo.png" alt="3 wheeler" className="vehicle-image" />
              </>
            )}
            {activeSlide === 4 && (
              <>
                <img src="/slidethree.png" alt="4 wheeler" className="vehicle-image" />
              </>
            )}
          </div>
        </div>

        <div className="slider-navigation">
          <button
            className={`slider-button ${activeSlide === 2 ? 'active' : ''}`}
            onClick={() => setActiveSlide(2)}
          >
            <span>2</span> Wheelers
          </button>
          <button
            className={`slider-button ${activeSlide === 3 ? 'active' : ''}`}
            onClick={() => setActiveSlide(3)}
          >
            <span>3</span> Wheelers
          </button>
          <button
            className={`slider-button ${activeSlide === 4 ? 'active' : ''}`}
            onClick={() => setActiveSlide(4)}
          >
            <span>4</span> Wheelers
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
