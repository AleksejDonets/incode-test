import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import load from './load';
import { loadUsers } from '../store/action';
import { Container, Grid}  from 'semantic-ui-react';
import { UserList } from './UserList';
import { SelectedUser } from './Selecteduser';
import SearchBar from './Search/Search';


class App extends Component {
  componentDidMount = () =>{
    load('clients.json')
    .then(data=>JSON.parse(data))
    .then(loadUsers);
  }
  render() {
    return (
      <Container>
        <Grid columns={2} divided> 
          <Grid.Row>
            <Grid.Column>
              <SearchBar />
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

App.propTypes = {
  loadUsers: PropTypes.func.isRequired,
};

export default connect(null, { loadUsers })(App);
