import { createSlice } from '@reduxjs/toolkit'

interface BeersProps {
  product: [{ id: number | null; name: string; description: string }]
}

const initialState: BeersProps[] = []

export const producSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    receivedProducts: (state, action) => {
      return {
        ...state,
        product: action.payload,
      }
    },
  },
})

export const { receivedProducts } = producSlice.actions
export default producSlice.reducer
