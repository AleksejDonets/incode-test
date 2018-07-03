import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Container, Grid} from 'semantic-ui-react';
import store from '../store/store';
import {UserList} from './UserList';
import {SelectedUser} from './SelectedUser/';
import Searchbar from './Search/Search';


class App extends Component {
  componentDidMount = () =>{
    axios.get('clients.json')
      .then( data => {
        store.dispatch({
          type:'LOAD_USER',
          users: data.data
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
