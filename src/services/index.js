import axios from 'axios'

export const callEventsCalendar = async () => {
    
    // need to get a better way of saving Env var
    const url = 'http://192.168.0.8:9000/events/calendar'



    try {
        const { data } = await axios.get(url)

        return data

    } catch (err) {
        //Need to create an error handler
        console.log('error: ', err)
    }
}