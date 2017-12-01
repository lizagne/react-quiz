//Create a component <HideMe>Blah blah blah</HideMe> that uses children to accept some content. When the component is clicked the content should be hidden.

import React, { Component } from "react";

class HideMe extends Component {
	constructor({props}) { //constructing the properties

		super(props); //this makes Component work

		this.state = { //this is an object literal
			isHidden: true, //this should always be a comma not a semi-colon 
		}

		this.clickShow = this.clickShow.bind(this);
	}

	clickShow () { //this is the method
			this.setState({ isHidden: !this.state.isHidden });
	}

	render () { //this is a method
		let { children } = this.props

		return (
			<div className="container">
 				<h1>Hide Me Challenge</h1>
				<p className="lead">Create a component HideMe Blah blah blah that uses children to accept some content. When the component is clicked the content should be hidden. </p>
				<p> {this.state.isHidden ? { children } : null } </p>
				
				<button
					className= "btn-primary"
					onClick={ this.clickShow }>
					Show/Hide
				</button>

			</div>
		);
	}
};

export default HideMe;





