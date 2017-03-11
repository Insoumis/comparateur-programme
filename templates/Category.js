import React from 'react';
import Markdown from 'react-markdown';
import { Row, Col, Hidden } from 'react-grid-system';

import './Category.scss';
import { ico } from '../utils';

const Category = ({ candidat, category }) => (
  <div className="Category" id={category.id}>
    <h3>
      <i className={`fa fa-${ico[category.id]}`} aria-hidden="true" />
      {' '}
      {category.title}
    </h3>
    {category.list.map((item, i) => (
    <div key={i}>
      <Row>
        <Col className="subtitle"><span>{item.title}</span></Col>
        <Hidden sm xs>
          <Col md={6}>
            <div className="proposal">
              <div className="ref">
                Dans {item.them.ref} ( <a href={item.them.link} target="_blank">source</a> )
              </div>
              <blockquote><Markdown className="md-inline" source={item.them.quote} /></blockquote>
            </div>
          </Col>
          <Col md={6}>
            <div className="proposal">
              <div className="ref">
                Dans {item.us.ref} ( <a href={item.us.link} target="_blank">source</a> )
              </div>
              <blockquote><Markdown className="md-inline" source={item.us.quote} /></blockquote>
            </div>
          </Col>
        </Hidden>
      </Row>
      <Row>
        <Col md={6}>
          <div className="candidat">Avec {candidat}</div>
          <div className="tldr">
            <i className="fa fa-arrow-circle-right" aria-hidden="true" /> <Markdown className="md-inline" source={item.them.tldr} />
          </div>
        </Col>
        <Col md={6}>
          <div className="candidat">Avec Jean-Luc Mélenchon</div>
          <div className="tldr">
            <i className="fa fa-arrow-circle-right" aria-hidden="true" /> <Markdown className="md-inline" source={item.us.tldr} />
          </div>
        </Col>
      </Row>
    </div>
    ))}
  </div>
);

Category.propTypes = {
  candidat: React.PropTypes.string,
  category: React.PropTypes.object
};

export default Category;
