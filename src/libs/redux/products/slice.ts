import { createSlice } from '@reduxjs/toolkit'
import { BeersProps } from '@screens/Home'



const initialState: BeersProps[] = []

export const beerSlice = createSlice({
  name: 'datailsBeers',
  initialState,
  reducers: {
    receivedInformationBeer: (state, action) => {
      return {
        ...state,
        detailsBeers: action.payload,
      }
    },
  },
})

export const { receivedInformationBeer } = beerSlice.actions
export default beerSlice.reducer
