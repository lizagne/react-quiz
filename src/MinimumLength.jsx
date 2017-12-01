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
                    type="password"
                    onChange={(evt) => this.setState({length: evt.target.value.length})}//callback function
                    onKeyPress={(evt) => this.hasMinimumLength(this.props.minimumLength) ? <p>Too Short!</p> : <p>This is a great password, Mark will be proud</p> }>
   
            	</input>
{/*	        	<MinimumLength label="Password" minimumLength={this.props.minimumLength} />
*/}            </div>
        );
    } 
}

export default MinimumLength;