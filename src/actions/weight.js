import { callWeightclassDetails } from '../services'

export const ADD_WEIGHT = 'ADD_WEIGHT'

export const ADD_WEIGHTCLASS_FIGHTERS = 'ADD_WEIGHTCLASS_FIGHTERS'

export const addWeight = (weight) => ({
    type: ADD_WEIGHT,
    weight
})

export const addWeightClassFighters = (fighters) => ({
    type: ADD_WEIGHTCLASS_FIGHTERS,
    fighters
})


export const handleAddWeight = (weight) => async dispatch => {
    dispatch(addWeight(weight))
}

export const handleAddWeightClassFighters = (weight) => async dispatch => {
    try {
        const fighters = await callWeightclassDetails(weight)
        dispatch(addWeightClassFighters(fighters))
        
    } catch (err) {
        //Need to make an error action handler
        console.log('handle AddWeightClassFighters error: ', err);
    }
}
 


