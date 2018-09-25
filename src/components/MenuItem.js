import React from 'react';

class MenuItem extends React.Component{
    render() {
        return <li className={this.props.className}>{this.props.name}, {this.props.price}zł ({this.props.quantity})</li>;
    }
}

export default MenuItem;