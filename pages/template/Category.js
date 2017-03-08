import React from 'react';
import { Row, Col } from 'react-grid-system';

import './Category.scss';

const Category = ({ category }) => (
  <div className="Category" id={category.id}>
    <h3>{category.title}</h3>
    {category.list.map((item, i) => (
      <Row key={i}>
        <Col xs={6}>
          <div className="proposal" dangerouslySetInnerHTML={{ __html: item.them }} />
        </Col>
        <Col xs={6}>
          <div className="proposal" dangerouslySetInnerHTML={{ __html: item.us }} />
        </Col>
      </Row>
    ))}
  </div>
);

Category.propTypes = {
  category: React.PropTypes.object
};

export default Category;
