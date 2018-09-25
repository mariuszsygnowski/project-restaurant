import React from 'react';
import MenuItem from './MenuItem';

const menuItems = [
  {
    id: 1,
    name: 'Burger',
    price: 4,
    quantity: 30
  },
  {
    id: 2,
    name: 'Pizza',
    price: 10,
    quantity: 20
  },
  {
    id: 3,
    name: 'Ice cream',
    price: 2,
    quantity: 10
  }
];

class Menu extends React.Component {
  render() {
    return (
      <div className={'menu'}>
        <h2 className={'menu__title'}>Menu</h2>
        <ul className={'menu__list'}>
          {menuItems.map(item => (
            <MenuItem key={item.id} name={item.name} price={item.price} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
