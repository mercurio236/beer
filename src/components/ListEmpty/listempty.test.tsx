import { render, screen } from "@testing-library/react-native"
import { ListEmpty } from "."


describe("Component: ListEmpty", () =>{
    it("should be title", () =>{
        render(<ListEmpty message="Lista vazia"/>)

        const title = screen.getByText(/Lista/i)

        expect(title).toBeTruthy()
    })
})