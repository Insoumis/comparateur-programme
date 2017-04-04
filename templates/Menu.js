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
      visible: false,
    };
  }

  scroll(e) {
    e.preventDefault();
    let id = e.target.href.split('#')[1];
    let destination = document.querySelector(`#${id}`);
    smoothScroll(destination);

    this.setState({
      visible: false,
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div className={`Menu${(this.state.visible ? ' visible': '')}`}>
        <button className="open-menu" onClick={() => this.setState({
          visible: !this.state.visible,
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
