import { mockBeerApiResponse } from '@__tests__/mocks/mockBeerApiResponse'
import { render, screen } from '@testing-library/react-native'
import { InfoBeer } from '.'

describe('Component: InfoBeer', () => {
  it('should be return info beer', async () => {
    const data = mockBeerApiResponse
    render(<InfoBeer data={data} isLoadingDetailBeer />)

    const isLoading = screen.getByTestId('loading')

    expect(data).toHaveLength(2)
    expect(isLoading).toBeTruthy()
    expect(data[0].name).toBe('Buzz')
  })

  it('not should values', () => {
    render(<InfoBeer data={null} isLoadingDetailBeer={false} />)

    const value = screen.queryByTestId('values-id')
    expect(value).toBeNull()
  })

  it('should be render info beer', async () => {
    render(<InfoBeer data={mockBeerApiResponse} isLoadingDetailBeer={false} />)

    const title = screen.getByText('Buzz')

    expect(title).toBeTruthy()
  })
})
