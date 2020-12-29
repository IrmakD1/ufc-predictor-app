import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { filter } from 'lodash'

import * as eventSelectors from '../selectors/events'
import * as eventActions from '../actions/events'
import { Calendar, EventModal } from '../components/molecules'

class CalendarScreen extends Component {

    state = {
        event: '',
        modalVisible: false
    }

    handleOnPress = ( navigation ) => {
        navigation.navigate('Home')
    }

    handleDayPress = (date) => {
        const { events } = this.props
        
        const filtered = filter(events, event => event.start_date === date)

        filtered.length > 0 ? 
            this.setState(() => ({event: filtered[0]})) :  
            this.setState(() => ({event: ''}))
    }

    handleEventModalPress = () => {
        const { handleAddEvent, navigation } = this.props
        const { event } = this.state

        handleAddEvent(event)

        this.setState(() => ({event: ''}))
        navigation.navigate('Event')
    }

    handleEventModalClose = () => this.setState(() => ({event: ''}))

    render() {

        const { navigation, markedDates } = this.props
        const { event, modalVisible } = this.state

        return (
            <View >
                <Calendar handlePress={this.handleOnPress} navigation={navigation} markedDates={markedDates} handleDayPress={this.handleDayPress}/>
                {event !== '' && (
                    <View style={styles.modalContainer}>
                        <EventModal 
                            name={event.name}
                            handleOnPress={this.handleEventModalPress}
                            handleOnClose={this.handleEventModalClose}
                            visible={modalVisible} 
                        />
                    </View>
                )}
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


const mapStateToProps = (state) => ({
    markedDates: eventSelectors.getMarkedDates(state),
    events: eventSelectors.getEventList(state)
})


export default connect(mapStateToProps, eventActions)(CalendarScreen)