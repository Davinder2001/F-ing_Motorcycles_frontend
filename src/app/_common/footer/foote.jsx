import React from "react";

import FooterPage from "./component/footerPage";
import { EXPORT_ALL_APIS } from "../../../../utils/apis/apis";

async function Footer() {
  let api=EXPORT_ALL_APIS()
  let result=await api.fetchFooter()
  
  return (
    
    <section className="footer_section">
      <FooterPage result={result}/>
    </section>
  );
}

export default Footer;
