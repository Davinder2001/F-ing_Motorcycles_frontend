import React from 'react';
import Layout from '../_common/layout/layout';
import TermsOfUseContent from './components/TermsOfUse';
 

const TermsOfUsePage = async () => {


  return (
    <>
      <Layout>
        <div className='container terms_of_use_page'>
          <TermsOfUseContent/>
        </div>
      </Layout>
    </>
  );
}

export default TermsOfUsePage;
