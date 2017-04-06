import React, { Component } from 'react';
import smoothScroll from 'smoothscroll';

import Submenu from './Submenu';
import './Menu.scss';

export default class Menu extends Component {
  static propTypes = {
    data: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  scroll(e) {
    let id = e.target.href.split('#')[1];
    let destination = document.querySelector(`#${id}`);
    smoothScroll(destination);

    this.setState({
      open: false,
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div className={`Menu${(this.state.open ? ' open': '')}`}>
        <button className="open-menu" onClick={() => this.setState({
          open: !this.state.open,
        })}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <ul>
          {data.categories.map((cat, i) => {
            return (
              <li key={i}>
                <Submenu cat={cat} onClick={(e) => this.scroll(e)} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
