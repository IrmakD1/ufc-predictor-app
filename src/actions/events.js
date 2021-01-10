import { callEventsCalendar, callEventDetails } from '../services'
import { addError } from './error'

export const ADD_EVENTS = 'ADD_EVENTS'
export const ADD_EVENT = 'ADD_EVENT'
export const ADD_EVENT_DETAILS = 'ADD_EVENT_DETAILS'

export const addEvents = events => ({
    type: ADD_EVENTS,
    events
})

export const addEvent = event => ({
    type: ADD_EVENT,
    event
})

export const addEventDetails = event => ({
    type: ADD_EVENT_DETAILS,
    event
})

export const handleAddEvent = (event) => dispatch => {
    dispatch(addEvent(event))
}

// To do add in defencive coding and error handling
export const handleAddEvents = () => async dispatch => {
    
    try {
        const eventsList = await callEventsCalendar()
    
        if (eventsList.length === 0) {
            dispatch(addError('Event List'))
        } else {
            dispatch(addEvents(eventsList))
        }
    } catch (err) {
        dispatch(addError('Event List'))
    }
}

export const handleAddEventDetails = (eventId) => async dispatch => {

    try {
        const eventDetails = await callEventDetails(eventId)
            
        if (eventDetails.length === 0) {
            dispatch(addError('Event Details'))
        } else {
            dispatch(addEventDetails(eventDetails))
        }
    } catch (err) {

        dispatch(addError('Event Details'))
    }
}
