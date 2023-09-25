import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Products } from '@screens/Products'

const { Screen, Navigator } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Products" component={Products} />
    </Navigator>
  )
}
