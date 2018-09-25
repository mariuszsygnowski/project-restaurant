import React from 'react';
import Branch from './Branch';

const restaurants = [
  {
    id: 1,
    address: { street: '15, High Street', city: 'Gdansk' },
    phone: '00 48 2873 3434'
  },
  {
    id: 2,
    address: { street: '9, Rynek', city: 'Wroclaw' },
    phone: '00 48 2342 3244'
  },
  {
    id: 3,
    address: { street: '24a, Acacia Ave.', city: 'Krakow' },
    phone: '00 48 4743 2343'
  }
];

class Locations extends React.Component {
  render() {
    return (
      <div className="restaurants">
        <h2 className="restaurants__title">Locations</h2>
        <ul className={'restaurants__list'}>
          {restaurants.map(restaurant => (
            <Branch
              key={restaurant.id}
              street={restaurant.address.street}
              city={restaurant.address.city}
              phone={restaurant.phone}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Locations;
