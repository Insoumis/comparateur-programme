import React from 'react';

const Markdown = ({ route }) =>
  <div dangerouslySetInnerHTML={{ __html: route.page.data.body }} />;

Markdown.propTypes = {
  route: React.PropTypes.object
};

export default Markdown;
