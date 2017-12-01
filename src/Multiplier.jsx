//Create a component <Multiplier x={ 5 } y={ 7 } /> that takes two props, x and y, and outputs their product (i.e. x × y) in a <p>.



import React from "react";

const Multiplier = props => (

    <div className="container">
    	<h1>Multiplier Challenge</h1>
    	<p className="lead">Create a component Multiplier x= 5  y= 7 that takes two props, x and y, and outputs their product (i.e. x × y) in a p tag.</p>
        <h2>Five multiplied by Seven is:</h2>
        <h2>{ props.x * props.y }</h2>
        
    </div>
);


export default Multiplier;
