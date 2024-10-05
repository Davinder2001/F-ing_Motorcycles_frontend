'use client';
import React, { useEffect, useState } from 'react';
import FirstSection from './firstSection';
import GallerySection from './gallerySection';
import { EXPORT_ALL_APIS } from '../../../../utils/apis/apis';

const MainPage = () => {
  const [greenEnergy, setGreenEnergy] = useState(null);
  const [greenEnergyGallery, setGreenEnergyGallery] = useState(null);

  useEffect(() => {
    const api = EXPORT_ALL_APIS(); // Move api call inside useEffect to prevent dependency issues
    const fetchData = async () => {
      try {
        const data = await api.fetchGreenEnergy();
        setGreenEnergy(data);
      } catch (error) {
        console.error('Error fetching green energy data', error);
      }
    };
 const fetchGallery = async () => {
      try {
        const data = await api.fetchGreenEnergyGalry()
        setGreenEnergyGallery(data);
      } catch (error) {
        console.error('Error fetching green energy data', error);
      }
    };

    fetchData();
    fetchGallery();
  }, []); // Empty dependency array to ensure it runs only once on mount

  return (
    <div className=''>
      <FirstSection greenEnergy={greenEnergy} />
      <GallerySection greenEnergyGallery={greenEnergyGallery} />
    </div>
  );
};

export default MainPage;
