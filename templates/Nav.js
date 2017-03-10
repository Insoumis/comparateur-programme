import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col } from 'react-grid-system';
import { prefixLink } from 'gatsby-helpers';

import './Nav.scss';

const Nav = () => (
  <nav className="Nav">
    <Container>
      <Row>
        <Col offset={{md: 2, xs: 1}} md={2} xs={5}>
          <Link activeClassName="active" className="ps" to={prefixLink('/versus/parti-socialiste/')}>Parti Socialiste</Link>
        </Col>
        <Col md={2} xs={5}>
          <Link activeClassName="active" className="em" to={prefixLink('/versus/en-marche/')}>En Marche</Link>
        </Col>
        <Col offset={{md: 0, xs: 1}} md={2} xs={5}>
          <Link activeClassName="active" className="lr" to={prefixLink('/versus/les-republicains/')}>Les Républicains</Link>
        </Col>
        <Col md={2} xs={5}>
          <Link activeClassName="active" className="fn" to={prefixLink('/versus/front-national/')}>Front National</Link>
        </Col>
      </Row>
    </Container>
  </nav>
);

export default Nav;
