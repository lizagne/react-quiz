//Create a component <EvenClicks> that displays "Even" if it's been clicked an even number of times and "Odd" if it's been clicked an odd number of times.


import React, { Component } from 'react';

class EvenClicks extends Component { 
	constructor(props) { 

		super(props);	

		this.onClick = this.onClick.bind(this);
 
		this.state = { //this is a object literal
	        clicked : false,
	    }
	}

	onClick () { //this is the method
		this.setState({ clicked : !this.state.clicked }); //value
	}

	render () { //this is a method

		return (
			<div className="container">
				<h1> Even Clicks Challenge </h1>
				<p className="lead">Create a component EvenClicks that displays "Even" if it's been clicked an even number of times and "Odd" if it's been clicked an odd number of times.</p>
				<button 
					className="btn-primary"
	 				onClick={ this.onClick }>
					{ this.state.clicked%2===0 ? "Even" : "Odd" } {/*this is the state*/}

				</button>	
			</div>
		);
	}
};

export default EvenClicks;