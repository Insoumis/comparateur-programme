import React, { Component } from 'react';
import getSlug from 'speakingurl';

import { ico } from '../utils';
import './Submenu.scss';

class Submenu extends Component {
  static propTypes = {
    cat: React.PropTypes.object,
    onClick: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { cat } = this.props;

    return (
      <div className={`Submenu ${cat.id}`}>
        <button
          onClick={() => this.setState({isOpen: !this.state.isOpen})}
        >
          <i className={`fa fa-${ico[cat.id]}`} aria-hidden="true"></i> {cat.title}
        </button>
        <ul className={(this.state.isOpen) ? 'visible' : ''}>
          {cat.list.map((topic, i) => (
            <li key={i}><a
              href={`#${getSlug(topic.title)}`}
              onClick={this.props.onClick}
            >{topic.title}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Submenu;
