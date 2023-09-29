import { render, screen, waitForElementToBeRemoved } from '@testing-library/react-native'
import { Loading } from '.'

describe('Component: Loading', () => {
  it('should be render component loanding', async () => {
     render(<Loading />)

     const state = screen.getByTestId('loading-general')

     expect(state?.children).toBeTruthy()
    
  })
})
