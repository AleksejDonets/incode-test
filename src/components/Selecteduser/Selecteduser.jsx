import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Item,Image, Container} from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

class Selecteduser extends Component {
    static propTypes = {
        activeUSer: PropTypes.object
    }
    displayActiveUser(){
        const {activeUser} = this.props;
        
        return(
            <Container>   
                <Item>
                    <Image size="small" src={activeUser.general.avatar} centered={true}/>
                    <Item.Header as='h1'>{activeUser.general.firstName}{activeUser.general.lastName}</Item.Header>
                    <Item.Meta>
                        <h3>Job:</h3>
                        <span >{activeUser.job.company}</span> : <span>{activeUser.job.title}</span>
                    </Item.Meta>
                    <Item.Description>
                        <h3>Address:</h3>
                        <p>
                            <span>{activeUser.address.street}</span> , <span>{activeUser.address.city}</span> , <span>{activeUser.address.zipcode}</span> , <span>{activeUser.address.country}</span>
                        </p>
                    </Item.Description>
                    <Item.Extra>
                        <h3>Contacts: </h3>
                        <p>           
                            <span>{activeUser.contact.email}</span> , Tel:<span>{activeUser.contact.phone}</span>
                        </p>          
                    </Item.Extra>
                </Item>
            </Container>
        )
    }
    render(){
        const {activeUser} = this.props;
        if(Object.keys(activeUser).length === 0){
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

    activeUser: state.activeUser
});
export default connect(mapStateToProps)(Selecteduser);