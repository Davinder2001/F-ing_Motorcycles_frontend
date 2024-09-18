import React from 'react';
import dynamic from 'next/dynamic';
import { EXPORT_ALL_APIS } from '../../../utils/apis/apis';
import Layout from '../_common/layout/layout'; 

 
const TermsAndConditionsContent = dynamic(() => import('./components/TermsAndConditions'), {
  ssr: false, 
});

const TermsAndConditionsPage = async () => {
  let api = EXPORT_ALL_APIS();
  let result;

  try {
    result = await api.fetchTermsAndConditionsPage();
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
    result = null; 
  }

  return (
    <Layout>
      <div className="container terms_and_conditions_page">
        <TermsAndConditionsContent result={result} />
      </div>
    </Layout>
  );
};

export default TermsAndConditionsPage;
