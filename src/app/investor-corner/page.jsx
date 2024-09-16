import React from 'react'
import Layout from '../_common/layout/layout'
import GrowthSection from './components/invertorPoints'
import Image from 'next/image'
import InvestorSection from './components/investorCorner'
import { EXPORT_ALL_APIS } from '../../../utils/apis/apis';



const page = async() => {
  const api   = EXPORT_ALL_APIS();
  let investor  = await api.fetchInvestor();
  return (
     <>
<Layout>
<InvestorSection investor={investor}/>
<div className='invertor_growthsection'>
<GrowthSection investor={investor}/>
  
</div>

</Layout>
 </>
  )
}

export default page