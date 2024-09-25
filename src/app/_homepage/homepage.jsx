'use client'
import React, { useEffect, useState } from 'react'

import SliderComponent from './components/heroSection'
import HybridInfo from './components/weProvide'
import InvestorSection from '../investor-corner/components/investorCorner'
import HybridWhy from './components/Hybridwhy'
import OurJourney from './components/ourJourney'
import ImageGallery from './components/imageGallery'
import { EXPORT_ALL_APIS } from '../../../utils/apis/apis'


function Homepage() {

  let api=EXPORT_ALL_APIS()

  let [result, setResult] = useState([])
  let [category, setCategory] = useState([])
  let [heroSection, setHeroSection] = useState([])
  let [investor, setInvestor] = useState([])
  let [gallery, setGallery] = useState([])


  useEffect(() => {

    let loadContent = async () => {
      let resp = await api.fetchContent()
      setResult(resp)
    }

    let loadCategory = async () => {
      let resp = await api.fetchCategories()
      setCategory(resp)
    }
    let loadHeroSection = async () => {
      let resp = await api.fetchHeroSections()
      setHeroSection(resp)
    }
    let loadInvestor = async () => {
      let resp = await api.fetchInvestor()
      setInvestor(resp)
    } 
    let loadGalaery = async () => {
      let resp = await api.fetchGalleries()
      setGallery(resp)
    }

    loadContent()
    loadCategory()
    loadHeroSection()
    loadInvestor()
    loadGalaery()

  }, [])







  return (

    <div className='home_page_section'>
      <SliderComponent result={result} heroSection={heroSection} />
      <HybridInfo category={category} />
      <HybridWhy result={result} />
      <OurJourney result={result} />
      <InvestorSection investor={investor} />
      <ImageGallery gallery={gallery} />
    </div>
  )
}

export default Homepage