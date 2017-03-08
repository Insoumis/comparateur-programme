import React from 'react';

import './Menu.scss';

const Menu = ({ categories }) => (
  <ul className="Menu">
    {categories.map((cat, i) => (
      <li><a href={`#${cat.id}`} key={i}>{cat.title}</a></li>
    ))}
  </ul>
);

Menu.propTypes = {
  categories: React.PropTypes.array
};

export default Menu;
