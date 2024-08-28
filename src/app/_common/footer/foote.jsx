import React from "react";
import FooterFirstColumn from "@/app/components/FooterComponents/footer_first_column";
import FooterSecondColumn from "@/app/components/FooterComponents/footer_second_column";
import FooterThirdColumn from "@/app/components/FooterComponents/footer_third_column";

function Footer() {
  return (
    <section className="footer_section">
      <div className="footer_inner_section container">
        <div className="first_column">
          <FooterFirstColumn />
        </div>
        <div className="second_column">
          <FooterSecondColumn />
        </div>
        <div className="third_column">
          <FooterThirdColumn />
        </div>
      </div>
    </section>
  );
}

export default Footer;
