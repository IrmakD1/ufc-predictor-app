import { createSelector } from 'reselect';

const errorSelector = state => state.error

export const getError = createSelector(
    errorSelector,
    error => {
        if (error !== null) return error.error
        return error
    }
)

