// components/OurJourney.jsx
export default function OurJourney() {
    return (
      <div className="our-journey-section ">
        <div className="journy_jnew container">
        <h2>Our <span className="highlight">Journey</span></h2>
        <div className="journey-timeline">
          <div className="journey-step">
            <img src="/journey1.png" alt="Vehicle control unit (VCU)" />
            <p>Vehicle control unit (VCU)</p>
          </div>
          <div className="journey-step">
            <img src="/journey2.png" alt="In house firmware (Hybrid Drive)" />
            <p>In house firmware (Hybrid Drive)</p>
          </div>
          <div className="journey-step">
            <img src="/journey3.png" alt="Sensor & Wiring Design" />
            <p>Sensor & Wiring Design</p>
          </div>
          <div className="journey-step">
            <img src="/journey4.png" alt="Range extender for Battery vehicle" />
            <p>Range extender for Battery vehicle</p>
          </div>
          <div className="journey-step">
            <img src="/journey5.png" alt="Hybrid gearbox integration" />
            <p>Hybrid gearbox integration</p>
          </div>
          <img src="/linechart.png" className="journeylines"></img>
        </div>
     

        </div>
      </div>
    );
  }
  