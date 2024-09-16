import React from 'react';

const TermsAndConditions = ({ result }) => {
  return (
    <div>
      {result?.data && result.data.length > 0 ? (
        result.data.map((term) => (
          <div key={term.id} style={{ marginBottom: '20px' }}>
            <h3>{term.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: term.description }} />
          </div>
        ))
      ) : (
        <p>No terms and conditions available.</p>
      )}
    </div>
  );
};

export default TermsAndConditions;
