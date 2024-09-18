// components/about_us_main.js

export const AboutUsMain = ({ result }) => {
  return (
    <div className='container aboutus'>
      {result?.data && result.data.length > 0 ? (
        result.data.map((about) => (
          <div key={about.id} style={{ marginBottom: '20px' }}>
            <h3>{about.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: about.description }} />
          </div>
        ))
      ) : (
        <p>No about us content available.</p>
      )}
    </div>
  );
};
