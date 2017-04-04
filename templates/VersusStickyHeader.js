import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { prefixLink } from 'gatsby-helpers';

import './VersusStickyHeader.scss';

const VersusStickyHeader = ({ data }) => (
  <div className="VersusStickyHeader">
  <Container>
    <Row>
      <Col className="clearfix" md={6}>
        <div className="logo">
          <img src={prefixLink(`/assets/${data.alias}-logo.png`)} alt={`Logo ${data.title}`}/>
        </div>
        {data.title}
      </Col>
      <Col className="clearfix" md={6}>
        <div className="logo">
          <img src={prefixLink('/assets/fi-logo.png')} alt="Logo de la France insoumise"/>
        </div>
        La France insoumise
      </Col>
    </Row>
  </Container>
  </div>
);

VersusStickyHeader.propTypes = {
  data: React.PropTypes.object,
};

export default VersusStickyHeader;
