import React from 'react'

import ControlProducts from './components/heroSection'
import HybridInfo from './components/weProvide'
import InvestorSection from '../investor-corner/components/investorCorner'


function Homepage({result, category}) {
  return (

   <div className='home_page_section'>
   <ControlProducts/>
   <HybridInfo/>
   <InvestorSection/>
 

   </div>
  )
}

export default Homepage