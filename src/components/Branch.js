import React from 'react';

class Branch extends React.Component {
  render() {
    return (
      <li className={'restaurant__branch'}>
        Address: {this.props.street}, {this.props.city} | Tel:
          {this.props.phone}
      </li>
    );
  }
}
export default Branch;
