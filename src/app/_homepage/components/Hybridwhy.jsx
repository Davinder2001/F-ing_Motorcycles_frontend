

// components/HybridWhy.jsx
export default function HybridWhy() {
    return (
      <div className="hybrid-why-section container">
        <div className="hybrid_sections">
        <div className="hybrid-tech-section">
        <div className="hybrid-why-content">
          <h2>Hybrid <span className="highlight">Why?</span></h2>
          <p>Best of Both World's</p>
          <ul>
            <li>Hybrid Efficiency, Electric Performance</li>
            <li>Fuel Savings, No Compromise</li>
            <li>Optimise energy use without compromising performance or driving range</li>
          </ul>
          <p>The <a href="#" className="vcu-link">Vehicle Control Unit (VCU)</a> is responsible for intelligently controlling the switching mechanism between ICE and Electric drivetrain.</p>
        </div>
        
         
          <div className="tech-icons">
            <img src="/hybrid2.png" alt="Hybrid Icon"  className="hybrid_imageone"/>
            <img src="hybrid.png" alt="Speedometer Icon"/>
          </div>
        </div>
        </div>
      </div>
    );
  }
  