import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { prefixLink } from 'gatsby-helpers';

import './Outlinks.scss';

const Outlinks = () => (
  <nav className="Outlinks">
    <Container>
      <Row>
        <Col className="left" md={8} xs={2}>
          <Link to={prefixLink('/')}><i className="fa fa-random" aria-hidden="true"></i></Link>
          <Hidden sm xs>
            <a href="https://jlm2017.fr" target="_blank">jlm2017.fr</a>
            <a href="https://laec.fr" target="_blank">Consultez le programme en ligne</a>
          </Hidden>
        </Col>
        <Col className="right" md={4} xs={10}>
          {/*<Link to={prefixLink('/about/')}><i className="fa fa-question-circle" aria-hidden="true"></i> À propos</Link>*/}
          <Link to={prefixLink('/contact/')}><i className="fa fa-envelope" aria-hidden="true"></i> Contact</Link>
        </Col>
      </Row>
    </Container>
  </nav>
);

export default Outlinks;
