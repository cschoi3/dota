import React, { Component, Fragment } from 'react'
import List from './list'
import ListItem from './listItem'

class EasternZodiacs extends Component {

  render() {

    const { easternZodiacs } = this.props;

    return (
      <List>
        {easternZodiacs.map((zodiac) =>
          <Fragment>
            <ListItem key={zodiac.name}>
              {zodiac.name} {zodiac.unicode_symbol}
            </ListItem>
          </Fragment>
        )}
      </List>
    )
  }
}

export default EasternZodiacs