import React from 'react';
import Layout from '../_common/layout/layout';
import TermsAndConditionsContent from './components/TermsAndConditions'; // Make sure this file exists and matches the component name
import { EXPORT_ALL_APIS } from '../../../utils/apis/apis';

const TermsAndConditionsPage = async () => {
  let api = EXPORT_ALL_APIS();
  let result = await api.fetchTermsAndConditionsPage(); // Ensure this function is defined in your API utils

  return (
    <>
      <Layout>
        <div className='container terms_and_conditions_page'>
          <TermsAndConditionsContent result={result} />
        </div>
      </Layout>
    </>
  );
}

export default TermsAndConditionsPage;
