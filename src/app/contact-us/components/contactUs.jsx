import Image from 'next/image';

const ContactSection = () => {
  return (
    <div className="container_contact_us">
      {/* Contact Cards */}
      <div className="contact-cards-container contact_details">
        {/* Card 1 */}
        <div className="card">
         <div className='linkedin_c'>
          <img className="line_g" src='/linesg.png'></img>
          <div className="title">Saurabh Kumar</div>
          <a href='#'>
          <img src="/linkedin.png"></img>
          </a>
          </div>
          <div className="icon-text-container">
            <Image
              src="/nav.png" // Replace with your email icon path
              alt="Email Icon"
              width={16}
              height={16}
              className="icon"
            />
            <span><a href="mailto:Ksaurabhh@gmail.com">Ksaurabhh@gmail.com</a></span>
          </div>
          <div className="icon-text-container">
            <Image
              src="/mob.png" // Replace with your phone icon path
              alt="Phone Icon"
              width={16}
              height={16}
              className="icon"
            />
            <span><a href="tel:91 9632319385">+91 9632319385</a></span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
        <div className='linkedin_c'>
        <img className="line_g" src='/linesg.png'></img>
          <div className="title">Deven Sharma</div>
            <img className="line_g" src='/linesg.png'></img>
          <a href='#'>
          <img src="/linkedin.png"></img>
          </a>
          </div>
          <div className="icon-text-container">
            <Image
              src="/nav.png" // Replace with your email icon path
              alt="Email Icon"
              width={16}
              height={16}
              className="icon"
            />
            <span><a href="mailto:devensharma@gmail.com">devensharma@gmail.com</a></span>
          </div>
          <div className="icon-text-container">
            <Image
              src="/mob.png" // Replace with your phone icon path
              alt="Phone Icon"
              width={16}
              height={16}
              className="icon"
            />
            <span><a href="tel:+91 9816788504">+91 9816788504</a></span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card address_contact">
        <img className="line_g" src='/linesg.png'></img>
          <div className="title">Registered Address</div>
          <div className="icon-text-container">
            <Image
              src="/map.png" // Replace with your location icon path
              alt="Location Icon"
              width={16}
              height={16}
              className="icon"
            />
            <span>Headquarters: Bangalore, Karnataka</span>
          </div>
          <div>
            <a className="getdirection" href="https://goo.gl/maps/..." target="_blank" rel="noopener noreferrer">
              Get directions
              <img src="/getd.png"></img>
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
