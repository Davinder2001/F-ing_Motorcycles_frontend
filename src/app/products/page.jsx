'use client'

import { useState } from 'react';
import TabComponent from './components/productTabs'
import Layout from '../_common/layout/layout';

function page() {
  return (
    <div>
   <Layout>   
      <TabComponent/>
  </Layout>

    </div>
  )
}

export default page