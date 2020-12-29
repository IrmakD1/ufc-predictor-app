import { callEventsCalendar, callEventDetails } from '../services'

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
    
        dispatch(addEvents(eventsList))
    } catch (err) {
        //Need to make an error action handler
        console.log('handle events error: ', err);
    }
}

export const handleAddEventDetails = (eventId) => async dispatch => {

    try {
        const eventDetails = await callEventDetails(eventId)

        dispatch(addEventDetails(eventDetails))
    } catch (err) {
        //Need to make an error action handler
        console.log('handle event details error: ', err);
    }
}
