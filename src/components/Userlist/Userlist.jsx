import React, {Component} from 'react';
import store from '../../store/store';
import { connect } from 'react-redux';
class Userlist extends Component {
    
    render(){
        return(
            <div>
                {this.props.users}

            </div>
        )
    }
}


const mapStateToProps = (store) => ({
    users: store.users
})
export default connect(mapStateToProps)(Userlist)