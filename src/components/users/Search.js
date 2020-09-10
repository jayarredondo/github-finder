import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text:''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''})
    }

    // using this function to change the state of the search bar based on whatever is typed into the box.
    // can also use [e.target.name] to target the name of the input element instead of using the text property of the state.
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (
            <div>
                {/*must use the bind method to define the state of the onChange method if we are not using an arrow function for
                the onSubmit function.*/}
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className='btn btn-dark btn-block'/>
                </form>
                {this.props.showClear &&
                <button className='btn btn-light btn-block' onClick={this.props.clearUsers}>Clear</button>}

            </div>
        )
    }
}
export default Search