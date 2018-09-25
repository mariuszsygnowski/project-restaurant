import React from 'react';
import Menu from './Menu';
import Locations from './Locations';

class App extends React.Component {
    render() {
        return (
            <div className={'page'}>
                <h1>Joe & Mario - express food</h1>
                <Menu/>
                <Locations/>
            </div>
        );
    }
}

export default App;
