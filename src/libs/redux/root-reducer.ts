import {combineReducers} from 'redux'
import  producSlice  from './products/slice'

export default combineReducers({
    products: producSlice
})

