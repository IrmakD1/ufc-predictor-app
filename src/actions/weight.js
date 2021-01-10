import { callWeightclassDetails } from '../services'
import { addError } from './error'

export const ADD_WEIGHT = 'ADD_WEIGHT'

export const ADD_WEIGHTCLASS_FIGHTERS = 'ADD_WEIGHTCLASS_FIGHTERS'

export const CLEAR_WEIGHTCLASS_FIGHTERS = 'CLEAR_WEIGHTCLASS_FIGHTERS'

export const addWeight = (weight) => ({
    type: ADD_WEIGHT,
    weight
})

export const addWeightClassFighters = (fighters) => ({
    type: ADD_WEIGHTCLASS_FIGHTERS,
    fighters
})

export const clearWeightClassFighters = () => ({
    type: CLEAR_WEIGHTCLASS_FIGHTERS
})



export const handleAddWeight = (weight) => async dispatch => {
    dispatch(addWeight(weight))
}

export const handleAddWeightClassFighters = (weight) => async dispatch => {
    try {
        const fighters = await callWeightclassDetails(weight)
        if (fighters.length === 0 || fighters.length < 16) {
            dispatch(addError('Ranked Fighters'))
        } else {
            dispatch(addWeightClassFighters(fighters))
        }
        
    } catch (err) {
        dispatch(addError('Ranked Fighters'))
    }
}

export const handleClearWeightClassFighters = () => dispatch => {
    dispatch(clearWeightClassFighters())
}
 


