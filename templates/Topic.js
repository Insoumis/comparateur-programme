import React, { Component } from 'react';
import { Row, Col, Hidden } from 'react-grid-system';

import './Topic.scss';

export default class Topic extends Component {
  static propTypes = {
    candidat: React.PropTypes.string,
    item: React.PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      isProposalVisible: false,
    };
  }

  render() {
    const { candidat, item } = this.props;
    return (
      <div className="Topic">
        <Row>
          <Col className="subtitle"><span>{item.title}</span></Col>
          <Hidden sm xs>
            <Col className="more" md={12}>
              <button onClick={() => this.setState({
                isProposalVisible: !this.state.isProposalVisible
              })}>
                <i className={`fa fa-${(this.state.isProposalVisible ? 'minus' : 'plus')}-circle`} aria-hidden="true"></i>
              </button>
            </Col>
            <Col md={6}>
              <div className={`proposal${(this.state.isProposalVisible) ? ' visible' : ''}`}>
              {(item.them.quote) ?
                <div>
                  <div className="ref">
                    Dans {item.them.ref} ( <a href={item.them.link} target="_blank">source</a> )
                  </div>
                  <blockquote
                    dangerouslySetInnerHTML={{ __html: item.them.quote }}
                  />
                </div>
              :
                <div className="none"><i className="fa fa-question-circle-o" aria-hidden="true"></i></div>
              }
              </div>
            </Col>
            <Col md={6}>
              <div className={`proposal${(this.state.isProposalVisible) ? ' visible' : ''}`}>
              {(item.us.quote) ?
                <div>
                  <div className="ref">
                    Dans {item.us.ref} ( <a href={item.us.link} target="_blank">source</a> )
                  </div>
                  <blockquote
                    dangerouslySetInnerHTML={{ __html: item.us.quote }}
                  />
                </div>
              :
                <div className="none"><i className="fa fa-question-circle-o" aria-hidden="true"></i></div>
              }
              </div>
            </Col>
          </Hidden>
        </Row>
        <Row>
          <Col md={6}>
            <div className="candidat">Avec {candidat}</div>
            <div
              className="tldr"
              dangerouslySetInnerHTML={{ __html: `<i class="fa fa-arrow-circle-right" aria-hidden="true"></i> ${item.them.tldr}` }}
            />
          </Col>
          <Col md={6}>
            <div className="candidat">Avec Jean-Luc Mélenchon</div>
            <div
              className="tldr"
              dangerouslySetInnerHTML={{ __html: `<i class="fa fa-arrow-circle-right" aria-hidden="true"></i> ${item.us.tldr}` }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
