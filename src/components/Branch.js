import React from 'react';

class Branch extends React.Component {
  render() {
    return (
      <li>
        Address: {this.props.street}, {this.props.city} | Tel:{' '}
        {this.props.phone}
      </li>
    );
  }
}
export default Branch;
