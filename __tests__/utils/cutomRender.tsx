import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RenderOptions, render } from '@testing-library/react-native'
import { store } from '../../src/libs/redux/store'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <Provider store={store}>{children}</Provider>
    </SafeAreaProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react-native'
export { customRender as render, Providers }
