import React from 'react';
import Helmet from 'react-helmet';

import Outlinks from '../templates/Outlinks';
import Header from '../templates/Header';
import Nav from '../templates/Nav';
import '../styles/main.scss';

const Template = ({ children }) => (
  <div>
    <Helmet
        title="Le comparateur de programmes de la France insoumise"
        description="Comparez les programmes des candidats à la présidentielle 2017 avec le programme de la France insoumise : l'Avenir en commun."
    />
    <Outlinks />
    <Header />
    <Nav />
    <div>{children}</div>
  </div>
);

Template.propTypes = {
  children: React.PropTypes.object
};

export default Template;
