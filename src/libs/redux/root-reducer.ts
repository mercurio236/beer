import {combineReducers} from 'redux'
import  beerSlice  from './products/slice'

export default combineReducers({
    products: beerSlice
})

