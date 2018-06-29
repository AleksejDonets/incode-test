import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Item,Image, Container} from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

class Selecteduser extends Component {
    static defaultProps = {
        activeUser: PropTypes.number,
        users: PropTypes.array
    }
    displayActiveUser(){
        const {activeUser,users} = this.props;
        const selectedUser = users[activeUser];
        return(
            <Container>   
                <Item>
                    <Image size="small" src={selectedUser.general.avatar} centered={true}/>
                    <Item.Header as='h1'>{selectedUser.general.firstName}{selectedUser.general.lastName}</Item.Header>
                    <Item.Meta>
                        <h3>Job:</h3>
                        <span >{selectedUser.job.company}</span> : <span>{selectedUser.job.title}</span>
                    </Item.Meta>
                    <Item.Description>
                        <h3>Address:</h3>
                        <p>
                            <span>{selectedUser.address.street}</span> , <span>{selectedUser.address.city}</span> , <span>{selectedUser.address.zipcode}</span> , <span>{selectedUser.address.country}</span>
                        </p>
                    </Item.Description>
                    <Item.Extra>
                        <h3>Contacts: </h3>
                        <p>           
                            <span>{selectedUser.contact.email}</span> , Tel:<span>{selectedUser.contact.phone}</span>
                        </p>          
                    </Item.Extra>
                </Item>
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
            <div>
                {this.displayActiveUser()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    users: state.users,
    activeUser: state.activeUser
});
export default connect(mapStateToProps)(Selecteduser);