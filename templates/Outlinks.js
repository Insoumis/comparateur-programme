import React from 'react';
import { Container } from 'react-grid-system';

import './Outlinks.scss';

const Outlinks = () => (
  <nav className="Outlinks">
    <Container>
      <a href="http://www.jlm2017.fr/">jlm2017.fr</a>
      <a href="https://laec.fr">Consultez le programme en ligne</a>
    </Container>
  </nav>
);

export default Outlinks;
