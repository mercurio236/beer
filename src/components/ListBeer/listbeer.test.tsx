import { mockBeerApiResponse } from "@__tests__/mocks/mockBeerApiResponse"
import { fireEvent, render, screen } from "@testing-library/react-native"
import ListBeer from "."


describe("Component: ListBee", () =>{
    const onPress = jest.fn()
    it("shoul be get value", () =>{

        render(<ListBeer data={mockBeerApiResponse[0]} onPress={onPress}/>)

        const selectBeer = screen.getByText(/buzz/i)
     
        expect(selectBeer.children).toBeTruthy()
    })

    it('not should be show list', () =>{
        render(<ListBeer data={null} onPress={onPress}/>)

        const listBeer = screen.getByTestId('list-beer')

        expect(listBeer.children).toHaveLength(1)
    })

    it('not should be select id ', () =>{
        render(<ListBeer data={mockBeerApiResponse[0]} onPress={onPress}/>)

        const selectId = screen.getByTestId('button-id')
        fireEvent.press(selectId)

        expect(onPress).toHaveLength(0)
    })
})