import React, { Component, Fragment } from 'react'
import List from './list'
import ListItem from './listItem'

class User extends Component {

    render() {
        
        const { users } = this.props;

        return (
            <List>
                {users.map((user) => 
                <Fragment>
                    <ListItem key={user.username}>
                        {user.username}
                    </ListItem>
                    <ListItem key={user.bloodType}>
                        {user.bloodType}
                    </ListItem>
                    <ListItem key={user.dob}>
                        {user.dob}
                    </ListItem>
                    <ListItem key={user.email}>
                        {user.email}
                    </ListItem>
                    <ListItem key={user.gender}>
                        {user.gender}
                    </ListItem>
                    <ListItem key={user.orientation}>
                        {user.orientation}
                    </ListItem>
                </Fragment>                        
                )}
            </List> 
        )
    }
}

export default User