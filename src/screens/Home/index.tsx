import { useEffect, useCallback } from 'react'
import { Alert, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { ContainerHome, LoadingHome } from './styles'

import { Header } from '@components/Header'
import ListBeer from '@components/ListBeer'
import { ListEmpty } from '@components/ListEmpty'

import { RootState } from 'src/libs/redux/store'
import { fetchBeers, fetchDetailsBeer } from '../../libs/redux/products/slice'
import { useNavigation } from '@react-navigation/native'
import { DTOBeer } from '@dtos/datailBeer'

export function Home() {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()

  const { beers, isLoading } = useSelector((state: RootState) => state.products)

  function handleDatilBeer(id: number) {
    dispatch(fetchDetailsBeer(id))
    navigate('Products')
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
          data={beers as DTOBeer[]}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ListBeer data={item} onPress={() => handleDatilBeer(item.id)} />
          )}
          shouldRasterizeIOS
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ListEmpty message="Lista de bebidas vazia." />
          )}
        />
      )}
    </ContainerHome>
  )
}
