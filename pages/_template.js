import React from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';

import Outlinks from '../templates/Outlinks';
import Header from '../templates/Header';
import Nav from '../templates/Nav';
import '../styles/main.scss';

const Template = ({ children, location }) => (
  <div>
    <Helmet
        title={config.siteTitle}
        description={config.siteDescription}
    />
    <Outlinks />
    <Header isHome={location.pathname == '/'} />
    <Nav isHome={location.pathname == '/'} />
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
