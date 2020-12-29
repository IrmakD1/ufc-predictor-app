import { createSelector } from 'reselect';

const fightersSelector = state => state.fighters

export const getFighterDetails = createSelector(
    fightersSelector,
    fighters => fighters
)