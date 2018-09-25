import React from 'react';
import Menu from './Menu';
import Locations from './Locations';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Locations />
      </div>
    );
  }
}

export default App;
