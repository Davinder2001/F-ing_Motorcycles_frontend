import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../_common/layout/layout'; 

 
const TermsAndConditionsContent = dynamic(() => import('./components/TermsAndConditions'), {
  ssr: false, 
});

const TermsAndConditionsPage = async () => {
   

  return (
    <Layout>
      <div className="container terms_and_conditions_page">
        <TermsAndConditionsContent/>
      </div>
    </Layout>
  );
};

export default TermsAndConditionsPage;
