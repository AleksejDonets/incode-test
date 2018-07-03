import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { searchInfo } from '../../store/action';

const SearchBar = ({ searchInfo }) => (
  <Input placeholder="Search..." onChange={event => searchInfo(event.target.value)} />
);

export default connect(null, { searchInfo })(SearchBar);
