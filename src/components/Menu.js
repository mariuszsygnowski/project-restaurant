import React from 'react';

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
      <div>
        <h2>Menu</h2>
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              {item.name}, {item.price}zł ({item.quantity})
            </li>
          ))}
          {/* <MenuItem /> */}
        </ul>
      </div>
    );
  }
}

export default Menu;
