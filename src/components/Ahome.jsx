import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import Header from './layout/Header';
import AdminSidebar from './layout/AdminSidebar'
import Notice from './Notice';
export default class Ahome extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AdminSidebar/> 
                <div class="ui text container" id='mainview'>
                    <Notice/>
                    <Notice/>
                    <Notice/>
                    <Notice/>
                    <Notice/>
                    <Notice/>
                    <Notice/>
                    <Notice/>
                    <Notice/>
                </div>

            </div>
        )
    }
}
