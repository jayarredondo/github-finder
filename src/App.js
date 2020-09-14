import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import axios from 'axios';
import './App.css';

class App extends Component {

    state = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        alert: null
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

    // Get a single GitHub user
    getUser = async (username) => {
        this.setState({loading: true})
        const res = await axios.get(`https://api.github.com/users/${username}?&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({user: res.data, loading: false})
    }

    // Get users repos
    getUserRepos = async (username) => {
        this.setState({loading: true})
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({repos: res.data, loading: false})
    }
    // clear users from state
    clearUsers = () => {
        this.setState({users: [], loading: false})
    }

    // Set Alert
    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}})
        // this will have the alert disappear after 5 seconds by resetting the alert value.
        setTimeout(() => this.setState({alert: null}), 5000)
    }

    render() {
        const {users, user, repos, loading} = this.state;

        return (
            <Router>
                {/*//  can use <Fragment> as a ghost element, meaning it won't appear in the dom.*/}
                <div className="App">
                    <Navbar title={'GitHub Finder'} icon={'fab fa-github'}/>
                    <div className="container">
                        <Alert alert={this.state.alert}/>
                        <Switch>
                            <Route exact path='/' render={props => (
                                <Fragment>
                                    <Search searchUsers={this.searchUsers}
                                            clearUsers={this.clearUsers}
                                            showClear={users.length > 0 ? true : false}
                                            setAlert={this.setAlert}/>
                                    <Users loading={loading} users={users}/>

                                </Fragment>
                                    )}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/user/:login' render={props => (
                                <User {...props}
                                      getUser={this.getUser}
                                      getUserRepos={this.getUserRepos}
                                      repos={repos}
                                      user={user}
                                      loading={loading}
                                />
                            )} />
                        </Switch>

                    </div>
                </div>
            </Router>
            // </fragment>
        );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from React'));

    }
}

export default App;
