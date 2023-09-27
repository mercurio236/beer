import { useEffect } from 'react'
import { Alert, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { ContainerHome, LoadingHome } from './styles'

import { Header } from '@components/Header'
import { BeerList } from '@components/BeerList'
import { ListEmpty } from '@components/ListEmpty'
import { Loading } from '@components/Loading'

import { RootState } from 'src/libs/redux/store'
import { fetchBeers, fetchDetailsBeer } from '../../libs/redux/products/slice'
import { useNavigation } from '@react-navigation/native'

export interface BeersProps {
  id: number
  name: string
  description: string
  image_url: string
}

export function Home() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { beers, isLoading } = useSelector(
    (state: RootState) => state.products
  )

  function handleDatilBeer(id: number) {
    dispatch(fetchDetailsBeer(id))
    navigation.navigate('Products')
  }

  useEffect(() => {
    dispatch(fetchBeers())
  }, [])

  return (
    <ContainerHome>
      <Header title="Bebidas" />
      {isLoading ? (
        <LoadingHome />
      ) : (
        <FlatList
          data={beers as BeersProps[]}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <BeerList data={item} onPress={() => handleDatilBeer(item.id)} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ListEmpty message="Lista de bebidas vazia." />
          )}
        />
      )}
    </ContainerHome>
  )
}
