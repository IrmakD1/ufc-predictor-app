import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import { filter } from 'lodash'

import * as eventSelectors from '../selectors/events'
import * as eventActions from '../actions/events'
import { Calendar, EventModal } from '../components/atoms'

class CalendarScreen extends Component {

    state = {
        event: '',
        modalVisible: false
    }

    handleOnPress = ( navigation ) => {
        navigation.navigate('Home')
    }

    handleEventPress = () => {
        const { handleAddEvent, navigation } = this.props
        const { event } = this.state

        handleAddEvent(event)

        this.setState(() => ({event: ''}))
        navigation.navigate('Event')
    }

    handleDayPress = (date) => {
        const { events } = this.props

        console.log('events', events);
        
        // const filtered = filter(markedDates, event => event.date === date)
        const filtered = filter(events, event => event.start_date === date)

        filtered.length > 0 ? this.setState(() => ({event: filtered[0]})) :  this.setState(() => ({event: ''}))
    }

    handleModalClose = () => this.setState(() => ({event: ''}))

    render() {

        const { navigation, markedDates } = this.props
        const { event, modalVisible } = this.state

        return (
            <View >
                <Calendar handlePress={this.handleOnPress} navigation={navigation} markedDates={markedDates} handleDayPress={this.handleDayPress}/>
                {event !== '' && (
                    <EventModal 
                        name={event.name}
                        handleOnPress={this.handleEventPress}
                        handleOnClose={this.handleModalClose}
                        visible={modalVisible} 
                    />
                )}
            </View>
        )
    }
} 

const mapStateToProps = (state) => ({
    markedDates: eventSelectors.getMarkedDates(state),
    events: eventSelectors.getEventList(state)
})


export default connect(mapStateToProps, eventActions)(CalendarScreen)