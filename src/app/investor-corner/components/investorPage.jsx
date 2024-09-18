'use client'
import React, { useEffect, useState } from 'react'
import InvestorSection from './investorCorner';
import GrowthSection from './invertorPoints';
import { EXPORT_ALL_APIS } from '../../../../utils/apis/apis';

function InvesTorPage() {
    let [investor,setInvestor]=useState([])
  
  const api = EXPORT_ALL_APIS();
  useEffect(()=>{

    let loadInvertor=async()=>{
      let resp = await api.fetchInvestor();
      setInvestor(resp)
    }
    loadInvertor()

  },[])
  return (
    <>
      <InvestorSection investor={investor} />
        <div className="invertor_growthsection">
          <GrowthSection investor={investor} />
        </div>
    </>
  )
}

export default InvesTorPage