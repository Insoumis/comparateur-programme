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
    let hash = document.location.hash;
    if (hash != '') {
      hash = hash.replace('#', '');
      document.getElementById(hash).scrollIntoView();
    }

    window.addEventListener('scroll', () => {
      const categories = document.querySelector('.categories');
      const titleHeight = document.querySelector('h3').offsetHeight;
      const topPosition = categories.offsetParent.offsetTop + categories.offsetTop + titleHeight;

      if (window.scrollY >= topPosition &&              document.querySelector('.stickyHeader')
      ) {
        document.querySelector('.stickyHeader').classList.add('visible');
      } else if (window.scrollY < topPosition &&
        document.querySelector('.stickyHeader')
      ) {
        document.querySelector('.stickyHeader').classList.remove('visible');
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
      <div>
        {<Hidden sm xs>
          <Menu data={data} />
        </Hidden>}
        <Container className="Versus">
          <Helmet>
            <title>{`La France insoumise VS ${data.title}`}</title>
            <meta name="description" content={`Comparez le programme de la France Insoumise avec celui de ${data.title}.`} />
            <meta property="og:title" content={`La France insoumise VS ${data.title}`} />
            <meta property="og:description" content={`Comparez le programme de la France Insoumise avec celui de ${data.title}.`} />
            <meta property="og:image" content={`http://comparateur-programme.fr/assets/preview-${data.alias}.png`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="635" />
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>
          <div className="container" ref={node => this.container = node}>
            <Row>
              <Col>
              <Hidden sm xs>
                <div className="stickyHeader">
                  <VersusStickyHeader data={data} />
                  <Menu data={data} />
                </div>
                <VersusHeader data={data} />
              </Hidden>
                <div className="categories">
                  {data.categories.map((cat, i) => <Category candidat={data.candidat} category={cat} key={i} />)}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Versus;
