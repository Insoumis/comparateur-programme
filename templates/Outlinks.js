import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col } from 'react-grid-system';
import { prefixLink } from 'gatsby-helpers';

import './Outlinks.scss';

const Outlinks = () => (
  <nav className="Outlinks">
    <Container>
      <Row>
        <Col xs={6}>
          <Link to={prefixLink('/')}><i className="fa fa-home" aria-hidden="true"></i></Link>
          <a href="https://jlm2017.fr" target="_blank">jlm2017.fr</a>
          <a href="https://laec.fr" target="_blank">Consultez le programme en ligne</a>
        </Col>
        <Col className="right" xs={6}>
          <Link to={prefixLink('/about/')}><i className="fa fa-question-circle" aria-hidden="true"></i> À propos</Link>
          <Link to={prefixLink('/contact/')}><i className="fa fa-envelope" aria-hidden="true"></i> Contact</Link>
        </Col>
      </Row>
    </Container>
  </nav>
);

export default Outlinks;
