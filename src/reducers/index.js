import { combineReducers } from 'redux'
import fighters from './fighters'
import eventsList from './eventsList'
import event from './event'

export default combineReducers({
    fighters,
    eventsList,
    event
})