'use client'

import { useEffect, useState } from "react";
import { EXPORT_ALL_APIS } from "../../../../utils/apis/apis";

const ContactSection =() => {

  let api=EXPORT_ALL_APIS();
  let [result,setResult]=useState([])

  useEffect(()=>{

    let loadContact=async()=>{
      let resp =await api.fetchContactPage();
      setResult(resp)
    }
    loadContact()

  },[])
  

  return (
    <div className="container_contact_us">
      {/* Contact Cards */}
      <div className="contact-cards-container contact_details">
        {/* Dynamically render the contact cards */}
        {result?.data?.map((contact, index) => (
          <div className="card" key={index}>
            <div className="linkedin_c">
              <img className="line_g" src="/linesg.png" alt="line" />
              <div className="title">{contact.name}</div>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
            <div className="icon-text-container">
              {/* <Image
                src="/nav.png" // Replace with your email icon path
                alt="Email Icon"
                width={16}
                height={16}
                className="icon"
              /> */}
               <img src='/nav.png' alt="Email Icon" />
              <span><a href={`mailto:${contact.email}`}>{contact.email}</a></span>
            </div>
            <div className="icon-text-container">
              {/* <Image
                src="/mob.png" // Replace with your phone icon path
                alt="Phone Icon"
                width={16}
                height={16}
                className="icon"
              /> */}
               <img src='/mob.png' alt="Phone Icon" />
              <span><a href={`tel:${contact.number}`}>{contact.number}</a></span>
            </div>
          </div>
        ))}

        {/* Static Registered Address Card */}
        <div className="card address_contact">
          <img className="line_g" src="/linesg.png" alt="line" />
          <div className="title">Registered Address</div>
          <div className="icon-text-container">
            {/* <Image
              src="/map.png" // Replace with your location icon path
              alt="Location Icon"
              width={16}
              height={16}
              className="icon"
            /> */}
             <img src='/map.png' alt="Phone Icon" />
            <span>Headquarters: Bangalore, Karnataka</span>
          </div>
          <div>
            <a className="getdirection" href="https://www.google.com/maps/search/No.66,+Hanumatha+Layout,+Singasandra,+Bangalore,+Karnataka,+India/@12.9656358,77.5716856,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              Get directions
              <img src="/getd.png" alt="Get Directions Icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.0517289138!2d77.350737!3d12.953847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670fbbcb251%3A0x3aaf65d5b2730c2b!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1661186734725!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactSection;
