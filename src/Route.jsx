import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Shome from './components/Shome'
import Ahome from './components/Ahome'
import NoticeForm from './components/layout/NoticeForm';
class Routes extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                  <Route path="/student/" component={Shome} exact/>
                  <Route path="/admin/" component={Ahome} exact/>
                  <Route path="/form/"  component={NoticeForm} exact/>
                </Switch>
            </div>
        );
    }
}

export default Routes;