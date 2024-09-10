// components/Founders.jsx
export default function Founders() {
    return (
      <div className="founders-section">
        <div className="container">
        <h2 className="title">The Founders</h2>
        <div className="founders-container">
          <div className="founder-card">
            <div className="founder-info">
              <h3 className="founder-name">Saurabh Kumar</h3>
              <p className="founder-details">IIT Kanpur, Mechanical</p>
              <p className="founder-details">BTech + MTech, 2011</p>
              <p className="founder-details">12 years+ @ TVS & Mercedes Benz</p>
              <p className="founder-details">Development of Hydrogen & Hybrid electric vehicles</p>
              <p className="founder-details">Serial Innovator: 26 patents filed</p>
            </div>
            <div className="founder-photo">
              <img src="/founderone.png" alt="Saurabh Kumar" />
            </div>
          </div>
  
          <div className="founder-card">
            <div className="founder-info">
              <h3 className="founder-name">Deven Sharma</h3>
              <p className="founder-details">Newcastle Uni. UK</p>
              <p className="founder-details">MS in Electrical Power, 2014</p>
              <p className="founder-details">12 years+ @ GE & Mercedes Benz</p>
              <p className="founder-details">Automotive testing, Industrial Automation & design</p>
              <p className="founder-details">Operations and management</p>
            </div>
            <div className="founder-photo">
              <img src="/foundertwoc.png" className="imagef_two" alt="Deven Sharma" />
            </div>
          </div>
        </div>
        </div> 
      </div>
    );
  }
  