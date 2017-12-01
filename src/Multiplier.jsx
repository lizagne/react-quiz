//Create a component <Multiplier x={ 5 } y={ 7 } /> that takes two props, x and y, and outputs their product (i.e. x × y) in a <p>.



import React from "react";

const Multiplier = props => (

    <div>
    	<h1>Multiplier Challenge</h1>
    	<p className="lead">Create a component Multiplier x= 5  y= 7 that takes two props, x and y, and outputs their product (i.e. x × y) in a p tag.</p>
        <p>Five multiplied by Seven is:</p>
        <h2>{ props.x * props.y }</h2>
        
    </div>
);


export default Multiplier;
