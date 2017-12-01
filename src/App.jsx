

import React, { Component } from 'react';


import Multiplier from "./Multiplier"
import EvenClicks from "./EvenClicks"
import CountBy from "./CountBy"

class App extends Component {
  render() {
    return (

    	<div>
	    	<Multiplier x={ 10 } y={ 7 } />
	    	<hr />
	    	<EvenClicks />
	    	<hr />
	    	<CountBy step={ 5 } />
	    	<hr />
    	</div>
     
    );
  }
}

export default App;
