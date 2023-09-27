import {all} from 'redux-saga/effects'
import beers from './products/saga'

export default function* rootSaga(){
    return yield all([
        beers
    ])
}