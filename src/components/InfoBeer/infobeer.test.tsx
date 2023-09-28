import { mockBeerApiResponse } from '@__tests__/mocks/mockBeerApiResponse'
import { render, screen, waitFor } from '@testing-library/react-native'
import { InfoBeer } from '.'

describe('Component: InfoBeer', () => {
  it('should be return info beer', async () => {
    const data = mockBeerApiResponse
    render(<InfoBeer data={data} isLoadingDetailBeer />)

    const isLoading = screen.getByTestId('loading')

    expect(data).toHaveLength(2)
    expect(isLoading).toBeTruthy()
  })

  it('not should values', () => {
    render(<InfoBeer data={[]} isLoadingDetailBeer />)

    const value = screen.queryByTestId('values-id')
    expect(value).toBeNull()
  })
})
