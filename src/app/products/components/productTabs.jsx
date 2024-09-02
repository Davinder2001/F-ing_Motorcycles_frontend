import { useState } from 'react';
import PopupForm from '@/app/_common/layout/popup';

const TabComponent = () => {
  const tabData = [
    {
      name: 'Mild Hybrid',
      title: ['Mild ', <span key="hybrid">Hybrid (MHEV)</span>],
      description: (
        <>
          <span className='custom_font_w'>
            The electric motor assists the engine but cannot power the vehicle on its own. 
            It provides a small boost during acceleration and helps improve fuel efficiency by powering ancillary systems.
          </span>
          <br />
          A Mild Hybrid Electric Vehicle (MHEV) is a type of vehicle that combines a traditional internal combustion engine 
          with an electric motor and a small battery pack. Unlike full hybrids or plug-in hybrids, the electric motor in an MHEV 
          cannot power the vehicle on its own but assists the engine during acceleration, cruising, and in stop-start situations. 
          This system enhances fuel efficiency by recovering energy during braking and using it to support the engine, thereby reducing 
          the load on the engine and lowering overall emissions.
          <br />
          The MHEV system is relatively lightweight and less complex compared to full hybrid systems, making it an attractive 
          option for manufacturers looking to improve fuel economy and reduce emissions without significantly altering vehicle design 
          or adding high costs. This technology is becoming increasingly popular as a bridge between traditional combustion engines 
          and fully electrified vehicles, offering a more efficient driving experience while maintaining the familiarity of conventional 
          gasoline or diesel engines.
        </>
      ),
    
    },
    {
      name: 'Parallel Hybrid',
      title: 'Parallel Hybrid',
      description: 'Description of the parallel hybrid goes here.'
    },
    {
      name: 'Plug-in Hybrid',
      title: 'Plug-in Hybrid',
      description: 'Description of the plug-in hybrid goes here.'
    },
    {
      name: 'Series Hybrid',
      title: 'Series Hybrid',
      description: 'Description of the series hybrid goes here.'
    },
    {
      name: 'CNG Hybrid',
      title: 'CNG Hybrid',
      description: 'Description of the CNG hybrid goes here.'
    }
  ];

  const [activeTab, setActiveTab] = useState('Mild Hybrid');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="tabs-container container">
      <h2>What We <span class="mc-green">Provide</span></h2>
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
            
              <p>{tab.description}</p>
              <button className="enquiry-button" onClick={openPopup}>
                <img src="/enquiry.png" alt="Enquiry" /> Enquiry Now
              </button>            </div>
          ))}
      </div>
      {isPopupOpen && <PopupForm closeForm={closePopup} />} {/* Conditionally render form */}

    </div>
  );
};

export default TabComponent;
