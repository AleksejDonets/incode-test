import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setActiveUser} from '../../store/action';
import { List } from 'semantic-ui-react';
import Userlistitem from './Userlistitem';
class Userlist extends Component {
    
    render(){
        const {onUserClick} = this.props;
     
       
        return(
           <List >
            {   
                
                this.props.users.map((user, index)=>{
                    return <Userlistitem key={index} user={user} onClick={ ()=>onUserClick(index)} />
                })
            }
         
           </List>
               
            
           
        );
    }
}


const mapStateToProps = (state) => ({
    users: state.users,
    
});

const mapDispatchToProps =(dispatch) =>{
   return {
        onUserClick: (index)=>{
           
            dispatch(setActiveUser(index))
        }
   }
}
export default connect(mapStateToProps, mapDispatchToProps )(Userlist)