import React from 'react'

const GallerySection = ({ greenEnergyGallery }) => {

  return (
    <div className='green-energy-second-section container'>
      <h2>Gallery</h2>
      <div className="gallery">
        {greenEnergyGallery?.data.map(item => (
          <div key={item.id} className="gallery-item">
            <h4>{item.heading}</h4>
            <img src={item.image} alt={item.heading} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GallerySection
