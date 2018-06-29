import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveUser } from '../../store/action';
import { List } from 'semantic-ui-react';
import UserListitem from './UserListitem';
import { searchFilter } from '../filter';


const searchPaths = [
  'general.firstName',
  'general.lastName',
  'job.company',
  'job.title',
  'contact.email',
  'contact.phone',
  'address.street',
  'address.city',
  'address.country',
];

class UserList extends Component {

  static defaultProps = {
    setActiveUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    searchQuery: PropTypes.string.isRequired
  };
  
  render() {
    const { onUserClick,users,searchQuery } = this.props;
    let userList = users;

    if (searchQuery) {
      userList = searchFilter( users, searchPaths, searchQuery );
    }

    return (
      <List>
        {userList.map((user, index) => (
          <UserListitem
            key={index}
            user={user}
            onClick={() => onUserClick(index)}
          />
        ))}
      </List>
    );
  }
}


const mapStateToProps = state => ({
  users: state.users,
  searchQuery: state.searchQuery
});

const mapDispatchToProps = dispatch => ({
  onUserClick: index => dispatch(setActiveUser(index))
});


export default connect(mapStateToProps, mapDispatchToProps)(UserList);