import React, {Fragment,Component} from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
    render() {

        return (
            //  can use <fragment> as a ghost element, meaning it won't appear in the dom.
            <div className="App">
                <Navbar title={'GitHub Finder'} icon={'fab fa-github'}/>
            </div>
            // </fragment>
        );

       // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from React'));

    }
}

export default App;
