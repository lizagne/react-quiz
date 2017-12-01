//Create a component <CountBy step={ 5 }> that takes a step prop. It should display a number (starting at 0) inside a <p>. Every time it is clicked the number should go up by step.


import React, { Component } from "react";

class CountBy extends Component {
	constructor(props) { //constructing the properties

		super(props); //this makes Component work

		this.state = { //this is an object literal
			counter: 0, //this should always be a comma not a semi-colon 
		}

		this.clickPlus = this.clickPlus.bind(this);
	}

	clickPlus () { //this is the method
			this.setState({
				counter: this.state.counter + this.props.step,
			});
	}

	render () { //this is a method
		return (
			<div className="container">
				<h1> Count By Challenge </h1>
				<p className="lead">Create a component CountBy step= 5  that takes a step prop. It should display a number (starting at 0) inside a p tag. Every time it is clicked the number should go up by step.</p>

				<p> { this.state.counter } </p>
				<button
					className= "btn-primary"
					onClick={ this.clickPlus }>
					Add 5
				</button>
			</div>
		);
	}
};

export default CountBy;
