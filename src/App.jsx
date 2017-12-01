

import React, { Component } from 'react';


import Multiplier from "./Multiplier"

class App extends Component {
  render() {
    return (

      <Multiplier x={ 10 } y={ 7 } />
     
    );
  }
}

export default App;
