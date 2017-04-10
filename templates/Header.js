import React from 'react';
import { Container } from 'react-grid-system';

import './Header.scss';

const Header = ({ isHome }) => (
  <header className="Header">
    <Container className="wrapper">
      <h1>
        La France insoumise
        {(!isHome) ?
        <div>VS</div>
        : false}
      </h1>
      <p><span>Le comparateur de</span> programmes</p>
    </Container>
  </header>
);

Header.propTypes = {
  isHome: React.PropTypes.bool,
};

export default Header;
