import React, {Component} from 'react'
import PropTypes from 'prop-types';

export class Navbar extends Component{
    // you can set the default props here, and they will be used if nothing is passed in for the props you declare.
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    }

    // Type checking for your props. Must import the class listed above.
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon}/> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar

