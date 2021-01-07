import axios from 'axios'

export const callEventsCalendar = async () => {
    
    // need to get a better way of saving Env var
    const url = 'http://192.168.0.8:9000/events/calendars'

    try {
        const { data } = await axios.get(url)

        return data

    } catch (err) {
        throw Error(err.message)
    }
}

export const callEventDetails = async (eventId) => {

    // need to get a better way of saving Env var
    const url = `http://192.168.0.8:9000/events/details/${eventId}`

    try {
        const { data } = await axios.get(url)

        return data

    } catch (err) {
        throw Error(err.message)
    }
    
}

export const callFightersDetails = async (fighterOneId, fighterTwoId) => {
    const url = `http://192.168.0.8:9000/fighters/?fighterOneId=${fighterOneId}&fighterTwoId=${fighterTwoId}`

    try {
        const { data } = await axios.get(url)

        return data

    } catch (err) {
        throw Error(err.message)
    }
}

export const callWeightclassDetails = async (weight) => {
    const url = `http://192.168.0.8:9000/fighters/weightclass/${weight}`

    try {
        const { data } = await axios.get(url)
        
        return data

    } catch (err) {
        throw Error(err.message)
    }
}