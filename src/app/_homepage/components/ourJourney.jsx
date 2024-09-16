// components/OurJourney.jsx
import React from 'react';

export default function OurJourney({ result }) {
    return (
        <div className="our-journey-section">
            <div className="journey_jnew container">
                <h2>{result?.third_sec_heading}</h2>
                <div className="journey-timeline">
                    {result && (
                        <>
                            <div className="journey-step">
                                <img src={result?.image_1_sec_3} alt="Vehicle control unit (VCU)" />
                                <p>{result?.disc_1_sec_3}</p>
                            </div>
                            <div className="journey-step">
                                <img src={result?.image_2_sec_3} alt="In house firmware (Hybrid Drive)" />
                                <p>{result?.disc_2_sec_3}</p>
                            </div>
                            <div className="journey-step">
                                <img src={result?.image_3_sec_3} alt="Sensor & Wiring Design" />
                                <p>{result?.disc_3_sec_3}</p>
                            </div>
                            <div className="journey-step">
                                <img src={result?.image_4_sec_3} alt="Range extender for Battery vehicle" />
                                <p>{result?.disc_4_sec_3}</p>
                            </div>
                            <div className="journey-step">
                                <img src={result?.image_5_sec_3} alt="Hybrid gearbox integration" />
                                <p>{result?.disc_5_sec_3}</p>
                            </div>
                        </>
                    )}
                    <img src="/linechart.png" className="journeylines" alt="Line Chart" />
                </div>
            </div>
        </div>
    );
}
