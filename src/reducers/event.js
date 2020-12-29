import { ADD_EVENT, ADD_EVENT_DETAILS } from '../actions/events'

const event = (state = null, action) => {
    switch (action.type) {
        case ADD_EVENT : 
            return {
                ...state,
                eventData: {
                    ...action.event
                }
            }
        case ADD_EVENT_DETAILS : 
            return {
                ...state,
                eventDetails: {
                    ...action.event
                }
            }
        default :
            return state
    }
}

export default event