import React, { Component } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import Helmet from 'react-helmet';

import Menu from './Menu';
import VersusStickyHeader from './VersusStickyHeader';
import VersusHeader from './VersusHeader';
import Category from './Category';
import './Versus.scss';

class Versus extends Component {
  static propTypes = {
    data: React.PropTypes.object
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const categories = document.getElementsByClassName('categories')[0];
      const titleHeight = document.getElementsByTagName('h3')[0].offsetHeight;
      const topPosition = categories.offsetParent.offsetTop + categories.offsetTop + titleHeight;

      if (window.scrollY >= topPosition && document.getElementsByClassName('VersusStickyHeader').length) {
        document.getElementsByClassName('VersusStickyHeader')[0].classList.add('visible');
      } else if (document.getElementsByClassName('VersusStickyHeader').length) {
        document.getElementsByClassName('VersusStickyHeader')[0].classList.remove('visible');
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data != this.props.data) {
      this.container.style.transition = '0s';
      this.container.style.opacity = 0;
      requestAnimationFrame(() => {
        this.container.style.opacity = 1;
        this.container.style.transition = '.4s';
      });
    }
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
        <div className="container" ref={node => this.container = node}>
          <Row>
            <Col>
            <Hidden sm xs>
              <VersusStickyHeader data={data} />
              <VersusHeader data={data} />
            </Hidden>
              <div className="categories">
                {data.categories.map((cat, i) => <Category candidat={data.candidat} category={cat} key={i} />)}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Versus;
