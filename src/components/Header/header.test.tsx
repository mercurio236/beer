import { render, screen } from '@testing-library/react-native'
import { Header } from '.'
import { NavigationContainer } from '@react-navigation/native'

describe('Component: Header', () => {
  it('should be render title', () => {
    render(
      <NavigationContainer>
        <Header title="Bebidas" />
      </NavigationContainer>
    )

    const title = screen.getByText('Bebidas')

    expect(title).toBeTruthy()
  })
})
