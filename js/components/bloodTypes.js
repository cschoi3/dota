import React, { Component, Fragment } from 'react'
import List from './list'
import ListItem from './listItem'

class BloodTypes extends Component {

    render() {
        
        const { bloodTypes } = this.props;

        return (
            <List>
                {bloodTypes.map((bloodType) => 
                    <ListItem key={bloodType.type}>
                        {bloodType.type}
                    </ListItem>
                )}
            </List> 
        )
    }
}

export default BloodTypes