import React, {Component} from 'react';
import Home from './containers/home'

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {};
  }

  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

export default App;
