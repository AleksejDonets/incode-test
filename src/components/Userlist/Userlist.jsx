import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Card,  Image } from 'semantic-ui-react';
class Userlist extends Component {
    
    render(){
      
        return(
           <div>
              {
                    this.props.users.map((user, index)=>{
                       return <Card key={index}>
                            <Image src={user.general.avatar} size='small'></Image>
                            <Card.Content>
                                <Card.Header>{user.general.firstName}{user.general.lastName}</Card.Header>
                                <Card.Description>{user.job.title}</Card.Description>
                            </Card.Content>
                        </Card>   
                    })
                }
           </div>
               
            
           
        );
    }
}


const mapStateToProps = (state) => ({
    users: state.users
})
export default connect(mapStateToProps)(Userlist)