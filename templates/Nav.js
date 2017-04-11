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
                  onMouseOver={() => this.setState({ versus: 'hamon' })}
                  onMouseOut={() => this.setState({ versus: null })}
                  to={prefixLink('/versus/parti-socialiste/')}
                >Parti Socialiste</Link>
              </Col>
              <Col md={2} xs={5}>
                <Link
                  activeClassName="active"
                  className="em"
                  onMouseOver={() => this.setState({ versus: 'macron' })}
                  onMouseOut={() => this.setState({ versus: null })}
                  to={prefixLink('/versus/en-marche/')}
                >En Marche</Link>
              </Col>
              <Col offset={{md: 0, xs: 1}} md={2} xs={5}>
                <Link
                  activeClassName="active"
                  className="lr"
                  onMouseOver={() => this.setState({ versus: 'fillon' })}
                  onMouseOut={() => this.setState({ versus: null })}
                  to={prefixLink('/versus/les-republicains/')}
                >Les Républicains</Link>
              </Col>
              <Col md={2} xs={5}>
                <Link
                  activeClassName="active"
                  className="fn"
                  onMouseOver={() => this.setState({ versus: 'lepen' })}
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
