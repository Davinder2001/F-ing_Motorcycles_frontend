import React from 'react'
import HomeFristSection from './components/firstSection'
import HomeCategory from './components/homeCategory'

function Homepage({result, category}) {
  return (

   <>
   <HomeFristSection result={result}/>
   <HomeCategory category={category}/>
 

   </>
  )
}

export default Homepage