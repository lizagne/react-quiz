//Visiting /even-clicks shows <EvenClicks>

//Visiting /hide-me shows <HideMe>

//Visiting /count-by/5 shows <CountBy> with the step value set to 5 (it should work for any value in the URL)

//Visiting /minimum/20 shows <MinimumLength> with the minimum length set to 20 (it should work for any value in the URL)

//Visiting /multiplier/20/30 uses <Multiplier> and displays the result of 20×30 (it should work for any values in the URL)

import React, { Component } from 'react';

import Multiplier from "./Multiplier"
import EvenClicks from "./EvenClicks"
import CountBy from "./CountBy"
import HideMe from "./HideMe"
import MinimumLength from "./MinimumLength"
import Links from "./Links"
import FourOhFour from "./FourOhFour"

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
 		<Router>
	        <div>
		    		<Switch>
		    			<Route exact path="/" component={ EvenClicks }/>

				    	<Route path="/multiplier" render={ () => (
						<Multiplier x={ 5 } y={ 7 } /> )}/>

				    	<Route path="/evenclicks" component={ EvenClicks }/>

				    	<Route path="/countby" render={ () => (
				    	<CountBy step={ 5 } /> )} />

				    	<Route path="/hideme" render={ () => (
						<HideMe>Blah blah blah</HideMe> )}/>

				    	<Route path="/minimum/20" render={ () => (
				    	<MinimumLength minimumLength={ 30 } /> )} />

				    	<Route component={ FourOhFour }/>
	 				</Switch>
 				<Links />
     		</div>
     	</Router>	
    );
  }
}

export default App;
 



