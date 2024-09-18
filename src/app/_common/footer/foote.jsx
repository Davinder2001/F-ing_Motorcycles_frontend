'use client'
import React, { useEffect, useState } from "react";

import FooterPage from "./component/footerPage";
import { EXPORT_ALL_APIS } from "../../../../utils/apis/apis";

async function Footer() {
  let api=EXPORT_ALL_APIS()
  let [result,setResult]=useState([])



  useEffect(()=>{
    let loadFooter=async()=>{
      let resp=await api.fetchFooter()
      setResult(resp)
    } 
    loadFooter()
  },[])



  console.log(result)
  
  return (
    <section className="footer_section">
      <FooterPage result={result}/>
    </section>
  );
}

export default Footer;
