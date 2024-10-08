import React from 'react'
import Link from 'next/link'

const GreenEnergy = ({greenEnergy}) => {
   
    return (
    // <div className='container'>
    //     <div className='green-energy-home'>
    //         <h2 className='title'>{greenEnergy?.data?.[0]?.name}</h2>
    //     <div className='content-area'>
    //     <div className='left-side'>
    //         <img
    //                 src={greenEnergy?.data?.[0]?.image}
    //                 alt={greenEnergy?.data?.[0]?.name}
    //               />
    //     </div>
    //     <div className='right-side'>
    //         <p>{greenEnergy?.data?.[0]?.short_description}</p>

    //     <Link href={'green-energy'} className='button'>Learn More</Link>
    //     </div>

    //     </div>
    //     </div>
    // </div>
    <section className="investor-corner ">
    <div className="invertor_inner_section container"> 
     <img src='/dotsback.png' className='custom_dot_section'></img>
     <div className="investor-image">
           <img src={greenEnergy?.data?.[0]?.image} alt="Green Energy" />
     </div>
     <div className="investor-content">
       <h3>{greenEnergy?.data?.[0]?.name}</h3>
       {/* <p>{greenEnergy?.data?.[0]?.short_description}</p> */}
       <p>{greenEnergy?.data?.[0]?.short_description
       }</p>
       <Link href={'green-energy'} className='button'>Learn More</Link>
     </div>
  </div>  
   </section>
  )
}

export default GreenEnergy