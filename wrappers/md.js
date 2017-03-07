import React from 'react';

const Markdown = ({ route }) =>
  <div dangerouslySetInnerHTML={{ __html: route.page.data.body }} />;

export default Markdown;
