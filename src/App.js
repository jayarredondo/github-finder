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
    // ====use this to populate users without searching====
    // async componentDidMount() {
    //     this.setState({loading: true})
    //
    //     const res = await axios.get(`https://api.github.com/users?client_id=
    //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    //     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //     this.setState({users: res.data, loading: false})
    // }
    // search github users
    searchUsers = async text => {
        this.setState({loading: true})
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        this.setState({users: res.data.items, loading: false})
    }
    // clear users from state
    clearUsers = () => {
        this.setState({users: [], loading: false})
    }

    render() {
        const {users, loading} = this.state;
        return (
            //  can use <fragment> as a ghost element, meaning it won't appear in the dom.
            <div className="App">
                <Navbar title={'GitHub Finder'} icon={'fab fa-github'}/>
                <div className="container">
                    <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false}/>
                    <Users loading={loading} users={users}/>
                </div>
            </div>
            // </fragment>
        );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from React'));

    }
}

export default App;
