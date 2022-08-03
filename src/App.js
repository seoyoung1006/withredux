import React, {Component} from 'react';
import './App.css';
import AppNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

class App extends Component {
  state = {number:0}
  render(){
    return(
      <div className="App">
      <h1>Root</h1>
      <AppNumberRoot></AppNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
    )
  }
}

export default App;
