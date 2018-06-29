import React from 'react';
import { PropTypes } from 'prop-types';
import { List, Image } from 'semantic-ui-react';

const UserListitem = ({ user, onClick }) => {
  return (
    <List.Item onClick={onClick} >
      <Image avatar src={user.general.avatar} />
      <List.Content>
        <List.Header>
          { user.general.firstName }
        </List.Header>
        <List.Description>
          {user.job.title}
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

UserListitem.propTypes = {
  user: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UserListitem;
