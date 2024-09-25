import React from 'react'
import Layout from '../_common/layout/layout'
import ContentSection from './components/content'
 

const page =async ()=> {

  return (
     <>
<Layout>
<div className='container contact_us_page'>
    
      <ContentSection />     

</div>
</Layout>
 </>
  )
}

export default page