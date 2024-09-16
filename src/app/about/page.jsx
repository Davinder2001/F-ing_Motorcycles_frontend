import React from 'react'
import Layout from '../_common/layout/layout'
import Founders from './components/teamMember'
import AboutUsMain from './components/about_us_main'
import { EXPORT_ALL_APIS } from '../../../utils/apis/apis';


const page = async () => {
  let api = EXPORT_ALL_APIS();
  let result = await api.fetchAboutUsPage(); 
  let founders = await api.fetchFounders(); 

  return (
     <>
<Layout>

    <AboutUsMain result={result}/>
<div className='teammembers'>
    <Founders founders={founders}/>


</div>


</Layout>
 </>
  )
}

export default page


