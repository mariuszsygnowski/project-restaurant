import React from 'react';

class MenuItem extends React.Component {
  render() {
    return (
      <li className="menu__item">
        {this.props.name}
        <span className="menu__item__price">{this.props.price}zł</span>
      </li>
    );
  }
}

export default MenuItem;
