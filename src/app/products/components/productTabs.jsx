// 'use client';

// import { useState, useEffect } from 'react';
// import PopupForm from '@/app/_common/layout/popup';
// import { useSearchParams } from 'next/navigation';

// const TabComponent = ({ result }) => {
//   const pathId = useSearchParams()
//   const id = pathId.get('id')
//   const tabData = result;


//   // Initialize activeTab state as an empty string
//   const [activeTab, setActiveTab] = useState('');
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   console.log(activeTab)

//   // Use useEffect to set the active tab to the first tab when tabData is available
//   useEffect(() => {
//     if (tabData.length > 0) {
//       setActiveTab(id || tabData[0].id); // If id is empty, use the first tab's id
//     }
//   }, [id, tabData]);  // Run this effect whenever tabData changes

//   const openPopup = () => setIsPopupOpen(true);
//   const closePopup = () => setIsPopupOpen(false);

//   return (
//     <div className="tabs-container container">
//       <h2>What We <span className="mc-green">Provide</span></h2>
//       <div className="tabs">
//         {tabData?.map((tab) => (
//           <button
//             key={tab.id}
//             className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             {tab.name}
//           </button>
//         ))}
//       </div>
//       <div className="tab-content custom_tab_design">
//         {tabData
//           .filter((tab) => tab.id === activeTab)
//           .map((tab) => (
//             <div key={tab.id}>
//               <h3>{tab.name}</h3>
//               <div
//                 dangerouslySetInnerHTML={{ __html: tab.long_description }} // Render HTML content
//               />
//               <button className="enquiry-button" onClick={openPopup}>
//                 <img src="/enquiry.png" alt="Enquiry" /> Enquiry Now
//               </button>
//             </div>
//           ))}
//       </div>
//       {isPopupOpen && <PopupForm closeForm={closePopup} />} {/* Conditionally render form */}
//     </div>
//   );
// };

// export default TabComponent;



'use client';

import { useState, useEffect } from 'react';
import PopupForm from '@/app/_common/layout/popup';
import { useSearchParams } from 'next/navigation';

const TabComponent = ({ result }) => {
  const pathId = useSearchParams();
  const id = pathId.get('id'); // Get the id from the URL search parameters
  const tabData = result;

  // Initialize activeTab state as an empty string
  const [activeTab, setActiveTab] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  console.log(activeTab);

  // Use useEffect to set the active tab based on the id from the URL
  useEffect(() => {
    if (tabData.length > 0) {
      // Set activeTab to id if it exists; otherwise, set to the first tab's id
      setActiveTab(id || tabData[0].id);
    }
  }, [id, tabData]); // Run this effect whenever id or tabData changes

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  console.log(tabData)

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

