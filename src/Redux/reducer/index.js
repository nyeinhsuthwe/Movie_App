import { movieReducer } from "./movies";
import {combineReducers} from 'redux'

const reducers = combineReducers({
    movies : movieReducer
})

export default reducers