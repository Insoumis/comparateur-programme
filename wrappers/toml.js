import React from 'react';

import Versus from '../templates/Versus';

const Toml = ({ route }) => <Versus data={route.page.data} />;

Toml.propTypes = {
  route: React.PropTypes.object
};

export default Toml;
