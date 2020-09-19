import { ADD_FIGHTER } from '../actions/fighters.js'

const fighters = (state = null, action) => {
    switch (action.type) {
        case ADD_FIGHTER : 
            return {
                ...state,
            }
        default :
            return state
    }
}

export default fighters