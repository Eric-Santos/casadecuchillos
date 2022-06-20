import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Encino Wood Smoked BBQ" />
      <h1 className="app__header-h1">Providing Great Food At Affordable Prices</h1>
      {/* <p className="p__opensans" style={{ margin: '2rem 0' }}>Service the community great food at affordable prices </p> */}
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      {/* <img src={images.welcome} alt="header_img" /> */}

      <img src={images.brisket} alt="header_img" />
    </div>
  </div>
);

export default Header;