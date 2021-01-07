import { combineReducers } from 'redux'
import fighters from './fighters'
import eventsList from './eventsList'
import event from './event'
import weight from './weight'
import error from './error'

export default combineReducers({
    fighters,
    eventsList,
    event,
    weight,
    error
})