// components/teamMember.js

export const Founders = ({ founders }) => {
  return (
    <div className="founders-section">
      <div className="container">
        <h2 className="title">The Founders</h2>
        <div className="founders-container">
          {founders && founders?.data?.map((founder) => (
            <div key={founder.id} className="founder-card">
              <div className="founder-info">
                <h3 className="founder-name">{founder.name}</h3>
                <div
                  className="founder-details"
                  dangerouslySetInnerHTML={{ __html: founder.description }}
                />
              </div>
              <div className="founder-photo">
                <img
                  src={founder.image} 
                  alt={founder.name}
                  className={founder.id === 4 ? "imagef_two" : ""}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
