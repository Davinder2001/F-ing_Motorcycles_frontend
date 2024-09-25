"use client"
import FooterColumnOne from '@/app/_common/footer/component/footer_first_column'
import FooterColumnTwo from '@/app/_common/footer/component/footer_second_column'
import FooterColumnThree from '@/app/_common/footer/component/footer_third_column'
import React from 'react'

function FooterPage({result}) {

   
   
  return (
    <div className='footer_outer'>
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
      <div className='copyright_bar'>
        <div className='copyright_bar_inner container'>© UZAQ (2024) | All Rights Reserved</div>
      </div>
    </div>
  )
}

export default FooterPage