import { createSlice } from '@reduxjs/toolkit'
import { DTOBeer } from 'src/dtos/datailBeer'

interface Props {
  beer: DTOBeer[]
  beers: DTOBeer[]
  isLoading: boolean
  isLoadingDetailBeer: boolean
}

const initialState: Props = {
  beer: [],
  beers: [],
  isLoading: false,
  isLoadingDetailBeer: false
}

export const beerSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    fetchBeers: (state) => {
      state.isLoading = true
    },
    fetchBeersSuccess: (state, action) => {
      state.beers = action.payload
      state.isLoading = false
    },
    fetchBeersFail: (state, action) => {
      state.isLoading = false
    },
    fetchDetailsBeer: (state, action) => {
      state.isLoadingDetailBeer = true
    },
    fetchDetailsBeerSuccess: (state, action) => {
      state.beer = action.payload
      state.isLoadingDetailBeer = false
    },
    fetchDetailsBeerFail: (state) => {
      state.isLoadingDetailBeer = false
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
