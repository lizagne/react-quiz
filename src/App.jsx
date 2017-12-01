

import React, { Component } from 'react';


import Multiplier from "./Multiplier"
import EvenClicks from "./EvenClicks"
import CountBy from "./CountBy"
import HideMe from "./HideMe"

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
	    	<HideMe>Blah blah blah</HideMe> 
    	</div>
     
    );
  }
}

export default App;
