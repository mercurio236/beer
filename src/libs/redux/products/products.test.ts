import { mockBeerApiResponse } from "@__tests__/mocks/mockBeerApiResponse"
import { store } from "../store"
import { fetchBeers, fetchBeersFail, fetchBeersSuccess, fetchDetailsBeer, fetchDetailsBeerFail, fetchDetailsBeerSuccess } from "./slice"

describe("Libs: Redux", () =>{
    it('should be values empty', () =>{
        const initialState = {
            beer: [],
            beers: [],
            isLoading: false,
            isLoadingDetailBeer: false
          }
        const state = store.getState().products

        expect(state).toMatchObject(initialState)
    })

    it('should be list of beer', () =>{
        const response = store.dispatch(fetchBeersSuccess(mockBeerApiResponse))
        const error = store.dispatch(fetchBeersFail(undefined))


    
        
        const data = response.payload

        expect(data).toHaveLength(2)
        expect(error.payload).toBeUndefined()
    })

    it('should be beer selected', () =>{
        const idSelected = store.dispatch(fetchDetailsBeer(1))
        const response = store.dispatch(fetchDetailsBeerSuccess(mockBeerApiResponse))
        const error = store.dispatch(fetchDetailsBeerFail())
        const data = store.getState().products.beer
  

        expect(idSelected.payload).toBe(data[0].id)
        expect(response.payload).toHaveLength(2)
        expect(error.payload).toBeUndefined()

    })
})