import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native'

import { Card } from '../components/atoms'
import CalendarIcon from '../assets/icons/calendar.png'
import FistIcon from '../assets/icons/fist.png'
import Styles from '../assets/constants/styles'
import * as eventActions from '../actions/events'
import * as errorActions from '../actions/error'


class Home extends Component { 
    
    componentDidMount() {
        const { handleAddEvents, handleClearError } = this.props

        handleClearError()
        handleAddEvents()

    }
    
    render () {

        const { navigation } = this.props

        return (
            <View style={styles.screen}>
                <Card text='Choose Event' img={CalendarIcon} navigation={navigation} route='Calendar' />
                <Card text='Choose Fighter' img={FistIcon} navigation={navigation}  route='Weights' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: Styles.screen
})

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {...eventActions, ...errorActions})(Home)