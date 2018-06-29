import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveUser } from '../../store/action';
import { List } from 'semantic-ui-react';
import Userlistitem from './Userlistitem';
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
    onUserClick : PropTypes.func,
    users: PropTypes.array,
    searchQuery: PropTypes.string
  }
  render() {
    const { onUserClick, users, searchQuery } = this.props;
    let userList = users;

    if (searchQuery) {
      userList = searchFilter(users, searchPaths, searchQuery);
    }

    return (
      <List>
        {userList.map((user, index) => (
          <Userlistitem
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