import { createSelector } from 'reselect';

const weightSelector = state => state.weight.weightclass

export const getWeightclass = createSelector(
    weightSelector,
    weightClass => weightClass
)