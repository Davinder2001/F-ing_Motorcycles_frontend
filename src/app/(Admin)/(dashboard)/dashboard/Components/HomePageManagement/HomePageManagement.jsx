import React from 'react'
import OtherSection from '@/app/(Admin)/(dashboard)/dashboard/Components/HomePageManagement/components/otherSection'
import HeroSection from '@/app/(Admin)/(dashboard)/dashboard/Components/HomePageManagement/components/heroSection'
import ImageGallery from './components/imageGallery'


const HomePageManagement = () => {
  return (
    <div>
        <h1>Home Page Management</h1>
        <HeroSection/>
        <OtherSection/>
        <ImageGallery/>
    </div>
  )
}

export default HomePageManagement