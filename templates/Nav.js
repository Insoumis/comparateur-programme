import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { prefixLink } from 'gatsby-helpers';

import HomeSelector from './HomeSelector';

import './Nav.scss';

class Nav extends Component {
  static propTypes = {
    isHome: React.PropTypes.bool,
  }

  constructor(props) {
    super(props);

    this.state = {
      versus: null,
    };
  }

  render() {
    let touchDevice;
    if (typeof window == 'object') {
      touchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    }

    return (
      <div>
        <Hidden sm xs>
          {(this.props.isHome) ?
          <HomeSelector selected={this.state.versus} />
          : false}
        </Hidden>
        <nav className="Nav">
          <Container>
            <Row>
              <Col offset={{md: 2, xs: 1}} md={2} xs={5}>
                <Link
                  activeClassName="active"
                  className="ps"
                  onMouseOver={(!touchDevice) ? () => this.setState({ versus: 'hamon' }) : false}
                  onMouseOut={() => this.setState({ versus: null })}
                  to={prefixLink('/versus/parti-socialiste/')}
                >Parti Socialiste</Link>
              </Col>
              <Col md={2} xs={5}>
                <Link
                  activeClassName="active"
                  className="em"
                  onMouseOver={(!touchDevice) ? () => this.setState({ versus: 'macron' }) : false}
                  onMouseOut={() => this.setState({ versus: null })}
                  to={prefixLink('/versus/en-marche/')}
                >En Marche</Link>
              </Col>
              <Col offset={{md: 0, xs: 1}} md={2} xs={5}>
                <Link
                  activeClassName="active"
                  className="lr"
                  onMouseOver={(!touchDevice) ? () => this.setState({ versus: 'fillon' }) : false}
                  onMouseOut={() => this.setState({ versus: null })}
                  to={prefixLink('/versus/les-republicains/')}
                >Les Républicains</Link>
              </Col>
              <Col md={2} xs={5}>
                <Link
                  activeClassName="active"
                  className="fn"
                  onMouseOver={(!touchDevice) ? () => this.setState({ versus: 'lepen' }) : false}
                  onMouseOut={() => this.setState({ versus: null })}
                  to={prefixLink('/versus/front-national/')}
                >Front National</Link>
              </Col>
            </Row>
          </Container>
        </nav>
      </div>
    );
  }
}



export default Nav;
