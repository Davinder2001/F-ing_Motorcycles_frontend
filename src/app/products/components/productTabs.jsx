'use client';

import { useState, useEffect } from 'react';
import PopupForm from '@/app/_common/layout/popup';

const TabComponent = ({ result }) => {
  const tabData = result;

  // Initialize activeTab with the name of the first tab
  const [activeTab, setActiveTab] = useState(tabData.length > 0 ? tabData[0].name : '');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="tabs-container container">
      <h2>What We <span className="mc-green">Provide</span></h2>
      <div className="tabs">
        {tabData.map((tab) => (
          <button
            key={tab.name}
            className={`tab-button ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content custom_tab_design">
        {tabData
          .filter((tab) => tab.name === activeTab)
          .map((tab) => (
            <div key={tab.name}>
              <h3>{tab.name}</h3>
              <p>{tab.long_description}</p>
              <button className="enquiry-button" onClick={openPopup}>
                <img src="/enquiry.png" alt="Enquiry" /> Enquiry Now
              </button>
            </div>
          ))}
      </div>
      {isPopupOpen && <PopupForm closeForm={closePopup} />} {/* Conditionally render form */}
    </div>
  );
};

export default TabComponent;
