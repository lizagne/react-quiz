//Create a component <Multiplier x={ 5 } y={ 7 } /> that takes two props, x and y, and outputs their product (i.e. x × y) in a <p>.



import React from "react";

const Multiplier = props => (

    <div className="page-header">
        <p>
            { props.x * props.y}
        </p>
    </div>
);


export default Multiplier;
