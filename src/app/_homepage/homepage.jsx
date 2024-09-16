import React from 'react'

import SliderComponent from './components/heroSection'
import HybridInfo from './components/weProvide'
import InvestorSection from '../investor-corner/components/investorCorner'
import HybridWhy from './components/Hybridwhy'
import OurJourney from './components/ourJourney'

function Homepage({result, category, heroSection, investor}) {

  return (

  <div className='home_page_section'>
    <SliderComponent result={result} heroSection={heroSection}/>
    <HybridInfo category={category} />
    <HybridWhy result={result}/>
    <OurJourney result={result}/>
    <InvestorSection investor={investor}/>
  </div>
  )
}

export default Homepage