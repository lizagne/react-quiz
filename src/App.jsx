

import React, { Component } from 'react';


import Multiplier from "./Multiplier"
import EvenClicks from "./EvenClicks"

class App extends Component {
  render() {
    return (
    	
    	<div>
	    	<Multiplier x={ 10 } y={ 7 } />
	    	<EvenClicks />
    	</div>
     
    );
  }
}

export default App;
