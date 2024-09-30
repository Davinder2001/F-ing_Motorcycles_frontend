import Image from "next/image";

// components/HybridWhy.jsx
export default function HybridWhy({ result }) {
  return (
    <div className="hybrid-why-section container">
      <div className="hybrid_sections">
        <div className="hybrid-tech-section">
          <div className="hybrid-why-content">
            <h2>{result?.heading_2}</h2>
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: result?.description_2 || "" }}
            ></div>
          </div>

          <div className="tech-icons">
            {/* <Image
              src={result?.image}
              alt="Hybrid Icon"
              className="hybrid_imageone"
              width={500} // You should specify width and height for better performance
              height={500} // or adjust these values according to your needs
            /> */}
              
              <img src={result?.image_2} alt="Speedometer Icon" className="speedometer-icon" />

            {/* <Image
              src={result?.image_2}
              alt="Speedometer Icon"
              className="speedometer-icon"
              width={500} // Adjust as needed
              height={500} // Adjust as needed
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
