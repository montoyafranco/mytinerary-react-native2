import { combineReducers } from 'redux'

import citiesReducer from './citiesReducer'
import userReducer from "./userReducer"
import itinerariesReducer from './itinerariesReducer'
import activitiesReducer from './activitiesReducer'


const mainReducer = combineReducers({

    citiesReducer,
    userReducer,
    itinerariesReducer ,
    activitiesReducer
       
    

})

export default mainReducer