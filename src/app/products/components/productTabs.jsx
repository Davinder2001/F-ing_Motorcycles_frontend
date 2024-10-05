'use client';

import { useState, useEffect } from 'react';
import PopupForm from '@/app/_common/layout/popup';
import { useSearchParams } from 'next/navigation';

const TabComponent = ({ result }) => {
  const pathId = useSearchParams()
  const getId = pathId.get('id')
  const id = Number(getId)
  const tabData = result;


  // Initialize activeTab state as an empty string
  const [activeTab, setActiveTab] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Use useEffect to set the active tab to the first tab when tabData is available
  useEffect(() => {
    if (tabData.length > 0) {
      if(id){
        setActiveTab(id);
      }else{
        setActiveTab(tabData[0].id);  // Set the first tab as the active tab

      }
    }
  }, [id, tabData]);  // Run this effect whenever tabData changes

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="tabs-container container">
      <h2>What We <span className="mc-green">Provide</span></h2>
      <div className="tabs">
        {tabData?.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content custom_tab_design">
        {tabData
          .filter((tab) => tab.id === activeTab)
          .map((tab) => (
            <div key={tab.id}>
              <h3>{tab.name}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: tab.long_description }} // Render HTML content
              />
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
