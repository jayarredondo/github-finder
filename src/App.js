import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios';
import './App.css';

class App extends Component {

    state = {
        users: [],
        loading: false
    };

    // used for http requests
    async componentDidMount() {
        this.setState({loading: true})

        const res = await axios.get(`https://api.github.com/users?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        this.setState({users: res.data, loading: false})
    }

    render() {
        return (
            //  can use <fragment> as a ghost element, meaning it won't appear in the dom.
            <div className="App">
                <Navbar title={'GitHub Finder'} icon={'fab fa-github'}/>
                <div className="container">
                    <Search />
                <Users loading={this.state.loading} users={this.state.users}/>
                </div>
            </div>
            // </fragment>
        );

       // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from React'));

    }
}

export default App;
