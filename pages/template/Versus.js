import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { prefixLink } from 'gatsby-helpers';

import Category from './Category';
import Menu from './Menu';
import './Versus.scss';

const Versus = ({ data }) => (
  <Container className="Versus">
    <Row>
      <Col offset={{xs: 1}} xs={10}>
        <Row className="title">
          <div className="vs">V<span>S</span></div>
          <Col xs={6}>
            <div className="logo">
              <img src={prefixLink(`/assets/${data.alias}.png`)} alt={`Logo ${data.title}`} />
            </div>
            <h2>{data.title}</h2>
            <div className="candidat">avec {data.candidat}</div>
          </Col>
          <Col xs={6}>
            <div className="logo">
              <img src={prefixLink('/assets/fi.png')} alt="Logo de la France insoumise"/>
            </div>
            <h2>La France insoumise</h2>
            <div className="candidat">avec Jean-Luc Mélenchon</div>
          </Col>
        </Row>
        <div className="categories">
          {data.categories.map((cat, i) => <Category category={cat} key={i} />)}
        </div>
      </Col>
    </Row>
  </Container>
);

Versus.propTypes = {
  data: React.PropTypes.object
};

export default Versus;
