import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Item,   Container} from 'semantic-ui-react'
class Selecteduser extends Component {


    displayActiveUser(){
        const {activeUser} = this.props;
        return(
            <Container>
                {
                    activeUser.map((user, index)=>{
                        return <Item key={index}>
                                <Item.Image size="big" src={user.general.avatar} />
                                <Item.Header as='h1'>{user.general.firstName}{user.general.lastName}</Item.Header>
                                <Item.Meta>
                                    <h3>Job:</h3>
                                    <span >{user.job.company}</span> : <span>{user.job.title}</span>
                                </Item.Meta>
                                <Item.Description>
                                    <h3>Address:</h3>
                                    <p>
                                         <span>{user.address.street}</span> , <span>{user.address.city}</span> , <span>{user.address.zipcode}</span> , <span>{user.address.country}</span>
                                    </p>
                                </Item.Description>
                                <Item.Extra>
                                    <h3>Contacts: </h3>
                                    <p>

                                        
                                        <span> {user.contact.email}</span> , Tel:<span>{user.contact.phone}</span>
                                    </p>
                                    
                                </Item.Extra>

                               </Item>
                    })
                }
            </Container>
           
        )
    }
    render(){
        const {activeUser} = this.props;

        if(activeUser.length === 0){
            return(
                    <h1>User not selected</h1>
            )
        }
        return(
            <div>{this.displayActiveUser()}</div>
            
        )
    }
}

const mapStateToProps = (state)=>({
    activeUser: state.activeUser
});
export default connect(mapStateToProps)(Selecteduser);