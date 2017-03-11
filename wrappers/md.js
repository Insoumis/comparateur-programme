import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

const Markdown = ({ route }) => (
  <Container>
    <Row>
      <Col>
        <div id={route.page.data.id} dangerouslySetInnerHTML={{ __html: route.page.data.body }} />
      </Col>
    </Row>
  </Container>
);


Markdown.propTypes = {
  route: React.PropTypes.object
};

export default Markdown;
