import { useNavigation } from '@react-navigation/native'
import { View, Text, Button } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from 'src/libs/redux/store'

export function Products() {
    const navigation = useNavigation()
  const { beer } = useSelector((state: RootState) => state.products)
  console.log('Page Products => ', beer)
  
  function handleGoBack(){
    navigation.goBack()
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{JSON.stringify(beer)}</Text>
      <Button title='Voltar' onPress={handleGoBack}/>
    </View>
  )
}
