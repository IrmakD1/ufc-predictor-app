import { createSelector } from 'reselect';
import { forEach } from 'lodash'

const eventListSelector = state => state.eventsList

export const getMarkedDates = createSelector(
    eventListSelector,
    events => {
        let eventsObject = {}

        forEach(events, comp => {
            eventsObject[comp.start_date] = {
                marked: true,
                dotColor: 'red',
                key: comp.name,
                date: comp.start_date,
                seasonId: comp.id
            }
        })

        return eventsObject
    }
)

export const getEventList = createSelector(
    eventListSelector,
    eventList => eventList
)