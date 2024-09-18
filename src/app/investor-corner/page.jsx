'use client'
import { useEffect, useState } from "react";
import { EXPORT_ALL_APIS } from "../../../utils/apis/apis";
import dynamic from "next/dynamic";

let InvestorSection = dynamic(() => import("./components/investorCorner"), {
  ssr: false,
});
let GrowthSection = dynamic(() => import("./components/invertorPoints"), {
  ssr: false,
});
let Layout = dynamic(() => import("../_common/layout/layout"), { ssr: false });

export default  function page() {

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
      <Layout>
        <InvestorSection investor={investor} />
        <div className="invertor_growthsection">
          <GrowthSection investor={investor} />
        </div>
      </Layout>
    </>
  );
}
