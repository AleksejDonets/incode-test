import React, { Component } from 'react';
import { connect } from 'react-redux';
import load from './load';
import store from '../store/store';
import {Container, Grid} from 'semantic-ui-react';
import {UserList} from './UserList';
import {SelectedUser} from './Selecteduser/';
import Searchbar from './Search/Search';


class App extends Component {
  componentDidMount = () =>{
    load('clients.json')
    .then(data=>JSON.parse(data))
    .then(data=>{
      store.dispatch({
        type:'LOAD_USER',
        users: data
      });
     
    });
  }
  render() {
    return (
      <Container>
        <Grid columns={2} divided> 
          <Grid.Row>
            <Grid.Column>
              <Searchbar />
              <UserList />
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <SelectedUser />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default connect()(App);
