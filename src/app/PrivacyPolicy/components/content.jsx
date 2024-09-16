import React from 'react';

const Content = ({ result }) => {
  return (
    <div>
      {result?.data && result.data.length > 0 ? (
        result.data.map((policy) => (
          <div key={policy.id} style={{ marginBottom: '20px' }}>
            <h3>{policy.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: policy.description }} />
          </div>
        ))
      ) : (
        <p>No privacy policies available.</p>
      )}
    </div>
  );
};

export default Content;
