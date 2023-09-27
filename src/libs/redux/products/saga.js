import { all, takeEvery, call, put } from 'redux-saga/effects'
import { fetchBeersSuccess, fetchBeersFail } from './slice'
import { api } from '../../services/axios'

function* fetchBeers() {
  try {
    const response = yield call(api.get, 'beers', { params: { per_page: 8 } })
    yield put(fetchBeersSuccess(response.data))
  } catch (error) {
    console.log(error)
    yield put(fetchBeersFail(error))
  }
}

export default all([takeEvery('beers/fetchBeers', fetchBeers)])
