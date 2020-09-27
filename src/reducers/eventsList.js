import { ADD_EVENTS } from '../actions/events'

const eventsList = (state = null, action) => {
    switch (action.type) {
        case ADD_EVENTS : 
            return {
                ...state,
                ...action.events
            }
        default :
            return state
    }
}

export default eventsList