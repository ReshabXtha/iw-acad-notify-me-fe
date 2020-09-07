import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import NoticeForm from './NoticeForm';
import EventForm from './EventForm';
export default class AdminSidebar extends Component {
    state = { activeItem: 'Notice' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
          <Menu pointing vertical>
            <Menu.Item
              name='Notice'
              active={activeItem === 'Notice'}
              onClick={this.handleItemClick}>
                  Notice
                  <span style={{float:"right"}}>
                  <NoticeForm/>
                  </span>
            </Menu.Item>
            <Menu.Item
              name='Events'
              active={activeItem === 'Events'}
              onClick={this.handleItemClick}>
                  Events
                  <span style={{float:"right"}}>
                  <EventForm/>
                  </span>
            </Menu.Item>
            <Menu.Item
              name='User'
              active={activeItem === 'Profile'}
              onClick={this.handleItemClick}
            />
          </Menu>
      );
    }
  }
  