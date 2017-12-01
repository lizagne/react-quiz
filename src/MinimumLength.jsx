//Create a component <MinimumLength length={ 30 }> that contains an <input>. The user should see a warning, "Too short!", unless they have entered at least length characters.

import React, { Component } from "react"; //this is importing react and using Components    setPasswordConfirm(string) { //method



class MinimumLength extends Component { //class which uses components
   
    constructor(props) {
        super(props);

        this.state = {
            length: 0
        }
    }

    hasMinimumLength(minLength) {
        return this.state.length >= minLength
    }

    render() { //everything you pass to a component is a prop...these props in green have functions inside of them

        return (
        	<div className="container">
                <h1>Minimum Length Challenge</h1>
                <p className="lead"> Create a component MinimumLength length= 30  that contains an input. The user should see a warning, "Too short!", unless they have entered at least length characters.</p>
                <h3>Password</h3>
            	<input 
                    placeholder="Type password here"
                    type="password"
                    onChange={(e) => this.setState({length: e.target.value.minLength})} //callback function
                    minLength={ 30 }>
            	</input>
                <hr />
                <p>{ this.props.minimumLength ? "Too Short!" : "Good password, Mark would approve"} </p>
            </div>
        );
    } 
}

export default MinimumLength;


                    // { this.props.minimumLength ? <p>Too Short!</p> : <p>This is a great password, Mark will be proud</p> }
