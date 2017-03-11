import React, { Component } from 'react';
import smoothScroll from 'smoothscroll';

import './Menu.scss';
import { ico } from '../utils';

class Menu extends Component {
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
        <button onClick={() => this.setState({
          visible: !this.state.visible,
        })}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <ul>
          {data.categories.map((cat, i) => {
            return (
              <li key={i}>
                <a
                  className={cat.id}
                  href={`#${cat.id}`}
                  onClick={this.scroll.bind(this)}
                >
                  <i className={`fa fa-${ico[cat.id]}`} aria-hidden="true"></i> {cat.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Menu;
