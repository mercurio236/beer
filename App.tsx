import { StatusBar } from 'react-native'
import { Routes } from './src/routes'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import theme from './src/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { store } from './src/libs/redux/store'
import { Provider } from 'react-redux'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider
        style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_100 }}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Provider store={store}>
          <Routes />
        </Provider>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
