import React, { Component } from 'react';
import { connect } from 'react-redux';
import load from './load';
import store from '../store/store';
import {Container, Grid} from 'semantic-ui-react';
import Userlist from './Userlist/Userlist';
import Selecteeduser from './Selecteduser/Selecteduser';
import Searchbar from './Search/Search';


class App extends Component {
  componentDidMount = ()=>{
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
      <Container>
        <Grid columns={2} divided> 
          <Grid.Row>
            <Grid.Column>
              <Searchbar />
              <Userlist />
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Selecteeduser />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default connect()(App);
