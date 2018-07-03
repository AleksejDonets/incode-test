import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveUser } from '../../store/action';
import { filtredUsers } from '../../store/action';
import { List } from 'semantic-ui-react';
import UserListItem from './UserListItem';
import { searchFilter } from '../filter';

class UserList extends Component {
  static defaultProps = {
    setActiveUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    searchQuery: PropTypes.string.isRequired,
  };
  render() {
    const { onUserClick,users } = this.props;
    return (
      <List>
        {users.map((user, index) => (
          <UserListItem
            key={index}
            user={user}
            onClick={() => onUserClick(user)}
          />
        ))}
      </List>
    );
  }
};
const mapStateToProps = state => ({
  users: searchFilter( state.users,  state.searchQuery ),
  searchQuery: state.searchQuery
});

const mapDispatchToProps = dispatch => ({
  onUserClick: user => dispatch(setActiveUser(user)),
  selectedUser: users=>dispatch(filtredUsers(users)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
