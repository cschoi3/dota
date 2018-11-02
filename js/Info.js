import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import List from './components/list'
import ListItem from './components/listItem'
import Section from './components/section'
import User from './components/user'
import BloodTypes from './components/bloodTypes'
import EasternZodiacs from './components/easternZodiacs'
import WesternZodiacs from './components/westernZodiacs'


class Info extends Component {

    componentWillMount() {
        console.log('hello this is props', this.props)
    }

    render() {

        const { data } = this.props

        return (
            <div>
                <Section background="cornflowerblue">
                    ✨ Magic
                </Section>
                {data.users ? <User users={data.users}></User> : ''}
                {data.bloodType ? <BloodTypes bloodTypes={data.bloodTypes}></BloodTypes> : ''}
                {data.westernZodiacs ? <WesternZodiacs westernZodiacs={data.westernZodiacs}></WesternZodiacs> : ''}
                {data.easternZodiacs ? <EasternZodiacs easternZodiacs={data.easternZodiacs}></EasternZodiacs> : ''}
            </div>
        )
    }
}

export default Info