import React, { useState } from 'react';

const ImageGallery = ({ gallery }) => {
    const [previewImage, setPreviewImage] = useState(null);

    const handleImageClick = (image) => {
        setPreviewImage(image);
    };

    const closePreview = () => {
        setPreviewImage(null);
    };

    return (
        <div className='certificate-section'> 
            <div className='container'>
                <h2>IP Achievements and Associations</h2>
                <div className='gallery-certificate'>    
                    {gallery && gallery.data?.map((item) => (
                        <div 
                            className='inner-image' 
                            key={item?.id}
                            onClick={() => handleImageClick(item.image)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img 
                                src={item.image} 
                                alt={item.imgHeading}    
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Preview Modal */}
            {previewImage && (
                <div className="image-preview-modal" onClick={closePreview}>
                    <div className="image-preview-content">
                        <span className="close-preview" onClick={closePreview}>&times;</span>
                        <img src={previewImage} alt="Preview" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageGallery;
