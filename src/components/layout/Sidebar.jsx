import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
export default class Sidebar extends Component {
  state = { activeItem: 'Notice' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu pointing vertical>
          <Menu.Item
            name='Notice'
            active={activeItem === 'Notice'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Events'
            active={activeItem === 'Events'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Profile'
            active={activeItem === 'Profile'}
            onClick={this.handleItemClick}
          />
        </Menu>
    );
  }
}
