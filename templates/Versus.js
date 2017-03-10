import React from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';

import Category from './Category';
import './Versus.scss';

const Versus = ({ data }) => (
  <Container className="Versus">
    <Helmet
        title={`La France insoumise VS ${data.title}`}
    />
    <Row>
      <Col offset={{md: 1}} md={10}>
      <Hidden sm xs>
        <Row className="title">
          <div className="vs">V<span>S</span></div>
          <Col md={6}>
            <div className="logo">
              <img src={prefixLink(`/assets/${data.alias}.png`)} alt={`Logo ${data.title}`} />
            </div>
            <h2>{data.title}</h2>
            <div className="candidat">avec {data.candidat}</div>
          </Col>
          <Col md={6}>
            <div className="logo">
              <img src={prefixLink('/assets/fi.png')} alt="Logo de la France insoumise"/>
            </div>
            <h2>La France insoumise</h2>
            <div className="candidat">avec Jean-Luc Mélenchon</div>
          </Col>
        </Row>
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
