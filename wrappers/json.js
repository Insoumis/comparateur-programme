import React from 'react';

import Versus from '../pages/template/Versus';

const Json = ({ route }) => <Versus data={route.page.data} />;

Json.propTypes = {
  route: React.PropTypes.object
};

export default Json;
