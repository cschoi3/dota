import React, { Component, Fragment } from 'react'
import List from './list'
import ListItem from './listItem'

class WesternZodiacs extends Component {

    render() {
        
        const { westernZodiacs } = this.props;

        return (
            <List>
                {westernZodiacs.map((westernZodiac) => 
                    <ListItem key={westernZodiac.name}>
                        {westernZodiac.name}
                    </ListItem>
                )}
            </List> 
        )
    }
}

export default WesternZodiacs