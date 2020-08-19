import { combineReducers } from 'redux'
import soallyReducer from './soally/soally.reducer'

const rootReducer = combineReducers({
    soally: soallyReducer,
})

export default rootReducer