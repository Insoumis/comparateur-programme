import React from 'react';
import { Container } from 'react-grid-system';

import './Header.scss';

const Header = () => (
  <header className="Header">
    <Container className="wrapper">
      <h1>
        La France insoumise
        <div>VS</div>
      </h1>
      <p><span>Le comparateur de</span> programmes</p>
    </Container>
  </header>
);

export default Header;
