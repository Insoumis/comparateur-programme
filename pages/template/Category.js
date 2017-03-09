import React from 'react';
import { Row, Col } from 'react-grid-system';

import './Category.scss';

const ico = {
  work: 'briefcase',
  agriculture: 'pagelines',
  ecology: 'leaf',
  health: 'heartbeat',
};

const Category = ({ category }) => (
  <div className="Category" id={category.id}>
    <h3>
      <i className={`fa fa-${ico[category.id]}`} aria-hidden="true"></i>
      {' '}
      {category.title}
    </h3>
    {category.list.map((item, i) => (
    <div>
      <Row key={i}>
        <Col className="title"><span>{item.title}</span></Col>
        <Col xs={6}>
          <div className="proposal">
            <div className="ref">
              Dans {item.them.ref} ( <a href={item.them.link} target="_blank">source</a> )
            </div>
            <blockquote>{item.them.quote}</blockquote>
          </div>
        </Col>
        <Col xs={6}>
          <div className="proposal">
            <div className="ref">
              Dans {item.us.ref} ( <a href={item.us.link} target="_blank">source</a> )
            </div>
            <blockquote>{item.us.quote}</blockquote>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <div
            className="tldr"
            dangerouslySetInnerHTML={{ __html: `<i class="fa fa-arrow-circle-right" aria-hidden="true"></i> ${item.them.tldr}` }}
          />
        </Col>
        <Col xs={6}>
          <div
            className="tldr"
            dangerouslySetInnerHTML={{ __html: `<i class="fa fa-arrow-circle-right" aria-hidden="true"></i> ${item.us.tldr}` }}
          />
        </Col>
      </Row>
    </div>
    ))}
  </div>
);

Category.propTypes = {
  category: React.PropTypes.object
};

export default Category;
