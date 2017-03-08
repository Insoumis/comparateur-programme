import React from 'react';

import Outlinks from './template/Outlinks';
import Header from './template/Header';
import Nav from './template/Nav';
import './styles/main.scss';

const Template = ({ children }) => {
  return (
    <div>
      <Outlinks />
      <Header />
      <Nav />
      <div>{children}</div>
    </div>
  );
};

Template.propTypes = {
  children: React.PropTypes.object
};

export default Template;
