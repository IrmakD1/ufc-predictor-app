import { createSelector } from 'reselect';
import { forEach } from 'lodash'

const eventListSelector = state => state.eventsList

const individualEventSelector = state => state.event

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

export const getEventId = createSelector(
    individualEventSelector,
    event => event.eventData.id
)

export const getEventDetails = createSelector(
    individualEventSelector,
    event => {
        let eventArray = []

        forEach(event.eventDetails, event => {
            let fightObject = {
                competitors: [event.competitors[0].name, event.competitors[1].name,],
                weightclass: event.weightclass,
                id: event.competitors[0].id,
                competitorOneId: event.competitors[0].id,
                competitorTwoId: event.competitors[1].id
            }

            eventArray.push(fightObject)
        })

        return eventArray.reverse()
    }
)