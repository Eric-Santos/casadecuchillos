import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">3900 Rosa Ave, El Paso, TX 79905</p>
        <p className="p__opensans">915-502-0754</p>
      </div>

      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="footer_logo" /> */}
        <h1>Casa De Cuchillos</h1>
        <p className="p__opensans">&quot;Serving the community great food at affordable prices.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Casa De Cuchillos. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;