import React from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';

import Helmet from 'react-helmet';

import Menu from './Menu';
import VersusHeader from './VersusHeader';
import Category from './Category';
import './Versus.scss';

const Versus = ({ data }) => (
  <Container className="Versus">
    <Helmet
        title={`La France insoumise VS ${data.title}`}
    />
    <Hidden sm xs>
      <Menu data={data} />
    </Hidden>
    <Row>
      <Col offset={{md: 1}} md={10}>
      <Hidden sm xs>
        <VersusHeader data={data} />
        <div className="sticky versus">
          <VersusHeader data={data} />
        </div>
      </Hidden>
        <div className="categories">
          {data.categories.map((cat, i) => <Category candidat={data.candidat} category={cat} key={i} />)}
        </div>
      </Col>
    </Row>
  </Container>
);

Versus.propTypes = {
  data: React.PropTypes.object
};

export default Versus;
