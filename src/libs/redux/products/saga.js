import { all, takeEvery, call, put } from 'redux-saga/effects'
import {
  fetchBeersSuccess,
  fetchBeersFail,
  fetchDetailsBeerSuccess,
  fetchDetailsBeerFail,
} from './slice'
import { api } from '../../services/axios'

function* fetchBeers() {
  try {
    const response = yield call(api.get, 'beers', { params: { per_page: 10 } })
    yield put(fetchBeersSuccess(response.data))
  } catch (error) {
    console.log(error)
    yield put(fetchBeersFail(error))
  }
}

function* fetchDetailsBeer(action) {
  try {
    const id = action.payload
    const response = yield call(api.get, `beers/${id}`)
    yield put(fetchDetailsBeerSuccess(response.data))
  } catch (error) {
    console.log(error)
    yield put(fetchDetailsBeerFail(error.message))
  }
}

export default all([
  takeEvery('beers/fetchBeers', fetchBeers),
  takeEvery('beers/fetchDetailsBeer', fetchDetailsBeer),
])
