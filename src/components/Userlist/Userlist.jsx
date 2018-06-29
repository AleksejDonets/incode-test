import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setActiveUser} from '../../store/action';
import { List } from 'semantic-ui-react';
import Userlistitem from './Userlistitem';
import {searchFilter} from '../sort';

class Userlist extends Component {

   userList(){

        const {onUserClick, users, searchQuery} = this.props;

       
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
      const userLists = searchFilter(users, searchPaths , searchQuery);
      
      return(
        <List >
 
        {   
          

          userLists.map((user, index)=>{
                return <Userlistitem key={index} user={user} onClick={ ()=>onUserClick(index)} />
            })
        }
     
       </List>
           
      )
    }
    
  
    render(){
        const {onUserClick, users, searchQuery} = this.props;

        console.log(searchQuery > 0 )
        if(searchQuery.length > 0){
            return(
                <div>{this.userList()}</div>
                
            )
            
       }else{
        return(
            <List >
 
             {   
               
 
                 users.map((user, index)=>{
                     return <Userlistitem key={index} user={user} onClick={ ()=>onUserClick(index)} />
                 })
             }
          
            </List>
                
             
            
         );
       }
      
        
    }
}


const mapStateToProps = (state) => ({
    users: state.users,
    searchQuery: state.searchQuery
    
});

const mapDispatchToProps =(dispatch) =>{
   return {
        onUserClick: (index)=>{
           
            dispatch(setActiveUser(index))
        }
   }
}
export default connect(mapStateToProps, mapDispatchToProps )(Userlist)