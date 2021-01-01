import { ADD_WEIGHT, ADD_WEIGHTCLASS_FIGHTERS } from '../actions/weight'

const weight = (state = null, action) => {
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
        default :
            return state
    }
}

export default weight