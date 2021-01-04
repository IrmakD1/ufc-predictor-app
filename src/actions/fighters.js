import { callFightersDetails } from '../services'

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
        
        dispatch(addFighterDetails(fightersDetails))
    } catch (err) {
        //Need to make an error action handler
        console.log('handle AddFighter error: ', err);
    }
}