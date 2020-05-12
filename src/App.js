import React, { Component } from 'react';
import {HashRouter as Router,Route, Switch} from 'react-router-dom';

import Contacts from './Contacts';
import Header from './Header';

import About from './About';
import AddContact from './AddContact';

import EditContacts from './EditContacts';
import {Provider} from './context';
import NotFound from './NotFound';
import Test from './Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router >
        
        <div>
        <Header branding='Contact Manager '/>
        
        <div className="container">
            <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/contact/add" component={AddContact}/>
                
                <Route exact path="/contact/edit/:id" component={EditContacts}/>

                <Route exact path="/about" component={About}/>
                <Route exact path="/test" component={Test} />
                <Route exact component={NotFound}/>
            </Switch>
        </div>
 
      </div>
      
      </Router>
   
      </Provider>
    )
  }
}
