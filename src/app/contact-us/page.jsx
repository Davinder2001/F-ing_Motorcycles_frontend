import React from 'react'
import Layout from '../_common/layout/layout'
import ContactSection from './components/contactUs'
function page() {
  return (
     <>
<Layout>
<div className='container contact_us_page'>
      <h1>Contact <span className='mc-green'>Details</span></h1> 
      <ContactSection/>     

</div>
</Layout>
 </>
  )
}

export default page