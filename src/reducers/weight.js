import { ADD_WEIGHT, ADD_WEIGHTCLASS_FIGHTERS, CLEAR_WEIGHTCLASS_FIGHTERS } from '../actions/weight'

const initialState = null

const weight = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WEIGHT :
            return {
                ...state,
                weightclass: action.weight
            }
        case ADD_WEIGHTCLASS_FIGHTERS :
            return {
                ...state,
                rankedFighters: action.fighters
            }
        case CLEAR_WEIGHTCLASS_FIGHTERS : 
            return initialState
        default :
            return state
    }
}

export default weight