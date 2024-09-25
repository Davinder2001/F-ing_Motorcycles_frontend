import React from 'react';

const Imagegallery = ({ gallery }) => {
    return (
        <div className='container'>
            {gallery && gallery.data?.map((item) => (
                <div key={item?.id} style={{ marginBottom: '20px' }}>
                    <h2>{item.imgHeading}</h2>
                    <img 
                        src={item.image} 
                        alt={item.imgHeading} 
                        style={{ maxWidth: '100%', height: 'auto' }} 
                    />
                </div>
            ))}
        </div>
    );
}

export default Imagegallery;
