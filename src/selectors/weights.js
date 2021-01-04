import { createSelector } from 'reselect';

const weightSelector = state => state.weight.weightclass

export const getWeightclass = createSelector(
    weightSelector,
    weightClass => weightClass
)

const rankedFighterSelector = state => state.weight.rankedFighters

export const getRankedFighters = createSelector(
    rankedFighterSelector,
    rankedFighters => rankedFighters
)