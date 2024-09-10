import React from 'react'
import Layout from '../_common/layout/layout'
import ContactSection from './components/contactUs'
import { EXPORT_ALL_APIS } from '../../../utils/apis/apis';


const page =async ()=> {
  let api=EXPORT_ALL_APIS();
  let result =await api.fetchContactPage();
  return (
     <>
<Layout>
<div className='container contact_us_page'>
      <h1>Contact <span className='mc-green'>Details</span></h1> 
      <ContactSection result={result}/>     

</div>
</Layout>
 </>
  )
}

export default page