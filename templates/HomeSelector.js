import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { prefixLink } from 'gatsby-helpers';

import './HomeSelector.scss';

const HomeSelector = ({ selected }) => (
  <div className="HomeSelector">
    <div style={{display: 'none'}}>
      <img src={prefixLink('/assets/hamon.png')} alt=""/>
      <img src={prefixLink('/assets/macron.png')} alt=""/>
      <img src={prefixLink('/assets/fillon.png')} alt=""/>
      <img src={prefixLink('/assets/lepen.png')} alt=""/>
    </div>
    <Container className="container">
      <Row className={`default${(!selected) ? ' visible' : ''}`}>
        Choisissez<br/>
        votre adversaire<br />
        <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
      </Row>
      <Row className={`versus${(selected) ? ' visible' : ''}`}>
        <Col className="left" md={6}>
          <img src={prefixLink('/assets/melenchon.png')} alt=""/>
        </Col>
        <div className="stamp">VS</div>
        <Col className="right" md={6}>
          {(selected) ?
          <img src={prefixLink(`/assets/${selected}.png`)} alt=""/>
          : false}
        </Col>
      </Row>
    </Container>
  </div>
);

HomeSelector.propTypes = {
  selected: React.PropTypes.string,
};

export default HomeSelector;
