import React from 'react';

import Outlinks from '../templates/Outlinks';
import Header from '../templates/Header';
import Nav from '../templates/Nav';
import '../styles/main.scss';
import { config } from 'config';

const Template = ({ children, location }) => (
  <div>

    <Outlinks />
    <Header isHome={location.pathname == config.linkPrefix + '/'} />
    <Nav isHome={location.pathname == config.linkPrefix + '/'} />
    <div>
      {children}
    </div>
  </div>
);

Template.propTypes = {
  children: React.PropTypes.object,
  location: React.PropTypes.object,
};

export default Template;
