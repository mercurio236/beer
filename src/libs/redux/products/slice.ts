import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  beer: null,
  beers: [],
  isLoading: true,
}

export const beerSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    fetchBeers: (state) => {
      state.isLoading = false
    },
    fetchBeersSuccess: (state, action) => {
      state.beers = action.payload
      state.isLoading = false
    },
    fetchBeersFail: (state, action) => {
      state.isLoading = false
    },
    fetchDetailsBeer: (state, action) => {
      console.log('Slice')
    },
    fetchDetailsBeerSuccess: (state, action) => {
      state.beer = action.payload
      console.log( 'Beer => ', state.beer)
    },
    fetchDetailsBeerFail: (state) => {
      console.log(state)
    },
  },
})

export const {
  fetchBeers,
  fetchBeersSuccess,
  fetchBeersFail,
  fetchDetailsBeer,
  fetchDetailsBeerSuccess,
  fetchDetailsBeerFail,
} = beerSlice.actions
export default beerSlice.reducer
