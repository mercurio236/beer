import { all, takeEvery } from 'redux-saga/effects'

function* fetchBeers(){
    console.log('chamou dentro do saga')
}

export default all([
    takeEvery("beers/fetchBeers", fetchBeers)
])