import React from 'react';

import Topic from './Topic';
import './Category.scss';
import { ico } from '../utils';

const Category = ({ candidat, category }) => (
  <div className="Category" id={category.id}>
    <h3>
      <i className={`fa fa-${ico[category.id]}`} aria-hidden="true"></i>
      {' '}
      {category.title}
    </h3>
    <div className="sticky category">
      <h3>
        <i className={`fa fa-${ico[category.id]}`} aria-hidden="true"></i>
        {' '}
        {category.title}
      </h3>
    </div>
    {category.list.map((item, i) => <Topic candidat={candidat} item={item} key={i} />)}
  </div>
);

Category.propTypes = {
  candidat: React.PropTypes.string,
  category: React.PropTypes.object
};

export default Category;
