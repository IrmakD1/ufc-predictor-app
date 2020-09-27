import { ADD_EVENT } from '../actions/events'

const event = (state = null, action) => {
    switch (action.type) {
        case ADD_EVENT : 
            return {
                ...state,
                ...action.event
            }
        default :
            return state
    }
}

export default event