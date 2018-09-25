import React from 'react';

class Branch extends React.Component {
  render() {
    return (
      <address className={'restaurant__branch'}>
        {this.props.street},<br />
        {this.props.city}
        <br />
        <i className="fas fa-phone-square" /> {this.props.phone}
      </address>
    );
  }
}
export default Branch;
