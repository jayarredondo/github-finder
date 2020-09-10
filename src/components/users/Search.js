import React, {Component} from 'react';

export class Search extends Component {
    state = {
        text:''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)
    }

    // using this function to change the state of the search bar based on whatever is typed into the box.
    // can also use [e.target.name] to target the name of the input element instead of using the text property of the state.
    onChange = (e) => {
        this.setState({text: e.target.value})
    }

    render(){
        return (
            <div>
                {/*must use the bind method to define the state of the onChange method if we are not using an arrow function for
                the onSubmit function.*/}
                <form className="form" onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="search" value="Search" className="btn btn-block btn-dark"/>
                </form>
            </div>
        )
    }
}
export default Search