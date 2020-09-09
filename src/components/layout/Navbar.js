import React from 'react'
import PropTypes from 'prop-types';

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

