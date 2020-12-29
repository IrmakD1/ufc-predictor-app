import { ADD_FIGHTER, ADD_FIGHTER_DETAILS, CLEAR_FIGHTER_DETAILS } from '../actions/fighters.js'

const initialState = {}

const fighters = (state = null, action) => {
    switch (action.type) {
        case ADD_FIGHTER : 
            return {
                ...state,
            }
        case ADD_FIGHTER_DETAILS :
            return {
                ...state,
                ...action.fightersDetails
            }
        case CLEAR_FIGHTER_DETAILS :
            return initialState
        default :
            return state
    }
}

export default fighters