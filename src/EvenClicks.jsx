//Create a component <EvenClicks> that displays "Even" if it's been clicked an even number of times and "Odd" if it's been clicked an odd number of times.


import React, { Component } from 'react';

class EvenClicks extends Component { 
	constructor(props) { 

		super(props); //has to be here for the this.state etc to work	

		this.onClick = this.onClick.bind(this); //binding the onClick method because of the context
 
		this.state = { //this is a object literal
	        clicked : false,
	    }
	}

	onClick () { //this is the method
		this.setState({ clicked : !this.state.clicked }); //set the state to the opposite of it's original state
	}

	render () { //this is a method

		return (
			<div className="container">
				<h1> Even Clicks Challenge </h1>
				<p className="lead">Create a component EvenClicks that displays "Even" if it's been clicked an even number of times and "Odd" if it's been clicked an odd number of times.</p>
				<button 
					className="btn-primary"
	 				onClick={ this.onClick }>
					{ this.state.clicked%2===0 ? "Even" : "Odd" } {/*using a ternary to give an even or odd alert*/}

				</button>	
			</div>
		);
	}
};

export default EvenClicks;