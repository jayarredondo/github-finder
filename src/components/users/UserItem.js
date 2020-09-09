import React from 'react';
import PropTypes from 'prop-types';


const UserItem = ({user : {login, avatar_url, html_url}}) => {

    // you can use a constructor to build a state, or just define the state.
    // constructor() {
    //     super();
    //     // state is a js object
    //     this.state = {
    //         id: 'id',
    //         login: 'mojombo',
    //         avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
    //         html_url: 'https://github.com/mojombo'
    //     }
    // }

    // state = {
    //     id: 'id',
    //     login: 'mojombo',
    //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //     html_url: 'https://github.com/mojombo'
    // }

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}}/>
            <h3>{login}</h3>
            <a href={html_url} className="btn btn-dark btn-snm my-1">More</a>
        </div>
        )

}

// type checking for the props we're using
UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem