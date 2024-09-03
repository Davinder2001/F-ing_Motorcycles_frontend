import React from 'react'
import Layout from '../_common/layout/layout'
import GrowthSection from './components/invertorPoints'
import Image from 'next/image'
import InvestorSection from './components/investorCorner'

function page() {
  return (
     <>
<Layout>
<InvestorSection/>
<div className='invertor_growthsection'>
<GrowthSection/>
  
</div>

</Layout>
 </>
  )
}

export default page