import React, { Component } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';

import Helmet from 'react-helmet';

import Menu from './Menu';
import VersusHeader from './VersusHeader';
import Category from './Category';
import './Versus.scss';

class Versus extends Component {
  static propTypes = {
    data: React.PropTypes.object
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const topPosition = document.getElementsByClassName('Versus')[0].offsetTop - 20;
      if (window.scrollY >= topPosition && document.getElementsByClassName('sticky').length) {
        document.getElementsByClassName('sticky')[0].classList.add('visible');
        document.getElementsByClassName('sticky')[1].classList.add('visible');
      } else if (document.getElementsByClassName('sticky').length) {
        document.getElementsByClassName('sticky')[0].classList.remove('visible');
        document.getElementsByClassName('sticky')[1].classList.remove('visible');
      }
    });
  }

  render() {
    const { data } = this.props;

    return (
      <Container className="Versus">
        <Helmet
            title={`La France insoumise VS ${data.title}`}
        />
        {<Hidden sm xs>
          <Menu data={data} />
        </Hidden>}
        <Row>
          <Col offset={{md: 1}} md={10}>
          <Hidden sm xs>
            <VersusHeader data={data} />
            {/*<div className="sticky versus">
              <VersusHeader data={data} />
            </div>*/}
          </Hidden>
            <div className="categories">
              {data.categories.map((cat, i) => <Category candidat={data.candidat} category={cat} key={i} />)}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Versus;
