// const hybridTypes = [
//   {
//     title: "Mild Hybrid",
//     abbreviation: "(MHEV)",
//     description: "The electric motor assists the engine but cannot power the vehicle on its own. It provides a small boost during acceleration and helps improve fuel efficiency by powering auxiliary systems."
//   },
//   {
//     title: "Series Hybrid",
//     abbreviation: "",
//     description: "Full hybrids can run solely on the electric motor, the internal combustion engine, or a combination of both. The vehicle automatically switches between these modes based on driving conditions."
//   },
//   {
//     title: "Plug-in Hybrid",
//     abbreviation: "(PHEV)",
//     description: "These hybrids have larger batteries that can be charged by plugging them into an external power source. They can drive on electric power for longer distances before the gasoline engine kicks in."
//   },
//   {
//     title: "CNG Hybrid",
//     abbreviation: "",
//     description: "The electric motor is the sole propulsion source, while the internal combustion engine only acts as a generator to recharge the battery."
//   },
//   {
//     title: "Parallel Hybrid",
//     abbreviation: "",
//     description: "Both the electric motor and the internal combustion engine can drive the vehicle either separately or together, depending on the driving conditions."
//   }
// ];

const HybridInfo = ({category}) => {
  console.log(category)
  return (

  <div className="what_we_provide ">
    <div className=" weprovide container">
      <h2 className="title">
        What We <span className="highlight">Provide</span>
      </h2>
      <div className="grid">
        {category.map((category, index) => (
          <div key={index} className="card">
            <img src="/linesg.png" className="line_absolute"/>
            <h3 className="cardTitle">
              {category.name} 
              {/* <span className="abbreviation">{hybrid.abbreviation}</span> */}
            </h3>
            <p className="description">{category.short_description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>  
  );
};

export default HybridInfo;
