import { callFightersDetails } from '../services'
import { addError } from './error'

export const ADD_FIGHTER = 'ADD_FIGHTER'

export const ADD_FIGHTER_DETAILS = 'ADD_FIGHTER_DETAILS'

export const CLEAR_FIGHTER_DETAILS = 'CLEAR_FIGHTER_DETAILS'


export const addFighterDetails = fightersDetails => ({
    type: ADD_FIGHTER_DETAILS,
    fightersDetails
})

export const clearFighterDetails = () => ({
    type: CLEAR_FIGHTER_DETAILS,
})



export const handleAddFighterDetails = (fighters) => async dispatch => {
    try {
        const fightersDetails = await callFightersDetails(fighters.competitorOneId, fighters.competitorTwoId)
        if (fightersDetails === undefined) {
            dispatch(addError('Fighter Details'))
        } else {
            dispatch(addFighterDetails(fightersDetails))
        }
    } catch (err) {
        dispatch(addError('Fighter Details'))
    }
}