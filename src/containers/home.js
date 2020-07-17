import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react'
import MenuTop from '../components/menutop'
import { Route, BrowserRouter } from 'react-router-dom'


class Home extends Component {

  constructor(props) {
  super(props);
  this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <MenuTop/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home
