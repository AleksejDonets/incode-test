import React from 'react';
import store from '../../store/store';
import {connect} from 'react-redux';
import {searchInfo} from '../../store/action';
import { Input } from 'semantic-ui-react';

const Searchbar = () => {
    const dataSearch = (event)=>{
        const value = event.target.value;
        store.dispatch(searchInfo(value))
    }
    return(
        <Input placeholder='Search...'  onChange={dataSearch}/>
    )
}
export default connect()(Searchbar);