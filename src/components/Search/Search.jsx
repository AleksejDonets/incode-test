import React from 'react';

import {connect} from 'react-redux';
import {searchInfo} from '../../store/action';
import { Input } from 'semantic-ui-react';


const SearchBar = ({ searchInfo }) => (
    <Input placeholder="Search..."  onChange={event => searchInfo(event.target.value)} />
);

export default connect(null, { searchInfo })(SearchBar);