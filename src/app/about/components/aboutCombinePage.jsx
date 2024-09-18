'use client'
import React, { useEffect, useState } from 'react'
import { AboutUsMain } from './about_us_main'
import { Founders } from './teamMember'
import { EXPORT_ALL_APIS } from '../../../../utils/apis/apis'

function AboutCombinePage() {
    let api=EXPORT_ALL_APIS()
    let [result,setResult]=useState([])
    let [founders,setFounders]=useState([])

    useEffect(()=>{

        let loadAbout=async()=>{
            let resp = await api.fetchAboutUsPage(); 
            setResult(resp)
        }

        let loadFounders=async()=>{
            let resp = await api.fetchFounders(); 
            setFounders(resp)
        }

        loadAbout()
        loadFounders()

    },[])


    
 
  return (
   <>
    <AboutUsMain result={result}/>
    <div className='teammembers'>
        <Founders founders={founders}/>
    </div>
    
   </>
  )
}

export default AboutCombinePage