import React from 'react'
import Layout from '../_common/layout/layout'
import ContentSection from './components/content'
import { EXPORT_ALL_APIS } from '../../../utils/apis/apis';


const page =async ()=> {
  let api=EXPORT_ALL_APIS();
  let result =await api.fetchPrivacyPolicyPage();
  return (
     <>
<Layout>
<div className='container contact_us_page'>
    
      <ContentSection result={result}/>     

</div>
</Layout>
 </>
  )
}

export default page