import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  beer: 0,
  beers: [],
  isLoading: true
}

export const beerSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    receivedInformationBeer: (state, action) => {
      return {
        ...state,
        detailsBeers: action.payload,
      }
    },
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
  },
})

export const {
  receivedInformationBeer,
  fetchBeers,
  fetchBeersSuccess,
  fetchBeersFail,
} = beerSlice.actions
export default beerSlice.reducer
