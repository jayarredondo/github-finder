import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Navbar = ({icon, title}) => {

    // Props are properties you can pass into a component from the outside.
    // you can set the default props here, and they will be used if nothing is passed in for the props you declare.
    // static defaultProps = {
    //     title: 'Github Finder',
    //     icon: 'fab fa-github'
    // }

    // Type checking for your props. Must import the class listed above.
    // static propTypes = {
    //     title: PropTypes.string.isRequired,
    //     icon: PropTypes.string.isRequired
    // }

    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon}/> {title}
            </h1>
            {/* we don't use 'a' tags because this is client side routing and will reset the state, instead we use the 'link' */}
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>

        </nav>
    )

}

//this is how we would refer to props in stateless functional components
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar

