"use client"
import FooterColumnOne from '@/app/components/FooterComponents/footer_first_column'
import FooterColumnTwo from '@/app/components/FooterComponents/footer_second_column'
import FooterColumnThree from '@/app/components/FooterComponents/footer_third_column'
import React from 'react'

function FooterPage({result}) {

   
   
  return (
    <>
        <div className="footer_inner_section container">
        <div className="first_column">
          <FooterColumnOne result={result} />
        </div>
        <div className="second_column">
          <FooterColumnTwo result={result}/>
        </div>
        <div className="third_column">
          <FooterColumnThree result={result}/>
        </div>
      </div>
    </>
  )
}

export default FooterPage