
import { combineReducers } from 'redux'
import user from './user'
import common from './common'


const userReducer = combineReducers({
    user,
    common,
})

export default userReducer