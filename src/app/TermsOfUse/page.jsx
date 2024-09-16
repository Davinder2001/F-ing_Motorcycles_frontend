import React from 'react';
import Layout from '../_common/layout/layout';
import TermsOfUseContent from './components/TermsOfUse'; // Make sure this file exists and matches the component name
import { EXPORT_ALL_APIS } from '../../../utils/apis/apis';

const TermsOfUsePage = async () => {
  let api = EXPORT_ALL_APIS();
  let result = await api.fetchTermsOfUsePage(); // Ensure this function is defined in your API utils

  return (
    <>
      <Layout>
        <div className='container terms_of_use_page'>
          <TermsOfUseContent result={result} />
        </div>
      </Layout>
    </>
  );
}

export default TermsOfUsePage;
