import { StatusBar } from 'react-native'
import { Routes } from './src/routes'
import { ThemeProvider } from 'styled-components'
import theme from './src/theme'

import { store } from './src/libs/redux/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  )
}
