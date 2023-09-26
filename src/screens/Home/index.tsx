import { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'

import { api } from '../../libs/services/axios'
import { ContainerHome } from './styles'
import { Header } from '@components/Header'
import { BeerList } from '@components/BeerList'
import { ListEmpty } from '@components/ListEmpty'
import { Loading } from '@components/Loading'

export interface BeersProps {
  id: number
  name: string
  description: string
  image_url: string
}

export function Home() {
  const [beers, setBeers] = useState<BeersProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function fetchListProducts() {
    try {
      setIsLoading(true)

      const response = await api.get('beers', { params: { per_page: 8 } })

      setBeers(response.data)
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Erro ao carregar as bebidas',
        'Não foi possível carregar as bebidas. Tente novamente mais tarde.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  function handleDatilBeer(id: number) {
    console.log(id)
  }

  useEffect(() => {
    fetchListProducts()
  }, [])

  return (
    <ContainerHome>
      <Header title="Bebidas" />
      {isLoading ? (
        <Loading  />
      ) : (
        <FlatList
          data={beers}
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
