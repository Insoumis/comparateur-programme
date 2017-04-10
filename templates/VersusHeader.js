import React from 'react';
import { Row, Col } from 'react-grid-system';
import { prefixLink } from 'gatsby-helpers';

import './VersusHeader.scss';

const VersusHeader = ({ data }) => (
  <Row className="VersusHeader">
    <div className="vs">V<span>S</span></div>
    <Col md={6}>
      <div className="logo">
        <img src={prefixLink('/assets/fi-logo.png')} alt="Logo de la France insoumise"/>
      </div>
      <h2>La France insoumise</h2>
      <div className="candidat">avec Jean-Luc Mélenchon</div>
    </Col>
    <Col md={6}>
      <div className="logo">
        <img src={prefixLink(`/assets/${data.alias}-logo.png`)} alt={`Logo ${data.title}`} />
      </div>
      <h2>{data.title}</h2>
      <div className="candidat">avec {data.candidat}</div>
    </Col>
  </Row>
);

VersusHeader.propTypes = {
  data: React.PropTypes.object
};

export default VersusHeader;
