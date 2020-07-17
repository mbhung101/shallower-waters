import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

export default class MenuTop extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='replays'
          active={activeItem === 'replays'}
          onClick={this.handleItemClick}
        >
          My Replays
        </Menu.Item>

        <Menu.Item
          name='user'
          active={activeItem === 'user'}
          onClick={this.handleItemClick}
          position={"right"}
        >
          User
        </Menu.Item>

      </Menu>
    )
  }
}
