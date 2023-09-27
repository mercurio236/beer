import { createSlice } from '@reduxjs/toolkit'
import { DTOBeer } from 'src/dtos/datailBeer'

interface Props {
  beer: DTOBeer[]
  beers: DTOBeer[]
  isLoading: boolean
}

const initialState: Props = {
  beer: [],
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
      state.isLoading = false
    },
    fetchDetailsBeerSuccess: (state, action) => {
      state.beer = action.payload
      state.isLoading = false
    },
    fetchDetailsBeerFail: (state) => {
      state.isLoading = false
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
