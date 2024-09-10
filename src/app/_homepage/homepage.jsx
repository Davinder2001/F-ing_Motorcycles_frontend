import React from 'react'

import ControlProducts from './components/heroSection'
import HybridInfo from './components/weProvide'
import InvestorSection from '../investor-corner/components/investorCorner'
import HybridWhy from './components/Hybridwhy'
import OurJourney from './components/ourJourney'

function Homepage({result, category}) {
  return (

   <div className='home_page_section'>
   <ControlProducts result={result}/>
   <HybridInfo category={category} />
<HybridWhy/>
<OurJourney/>
   <InvestorSection/>
 

   </div>
  )
}

export default Homepage