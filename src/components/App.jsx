import React, { Component } from 'react';
import { connect } from 'react-redux';
import load from './load';
import store from '../store/store';
import Userlist from './Userlist/Userlist';
import './App.css';

class App extends Component {
  componentDidMount = () =>{
    load('clients.json')
    .then(data=>JSON.parse(data))
    .then(data=>{
      store.dispatch({
        type:'LOAD_USER',
        users: data
      })
     
    })
  }
 
  render() {

    return (
      <div className="App">
        <Userlist />
      </div>
    );
  }
}




export default connect()(App);
