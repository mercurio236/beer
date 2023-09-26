import { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'

import { api } from '../../libs/services/axios'
import { ContainerHome } from './styles'
import { Header } from '@components/Header'
import { BeerList } from '@components/BeerList'

export interface BeersProps {
  id: number | null
  name: string
  description: string
  image_url: string
}

export function Home() {
  const [beers, setBeers] = useState<BeersProps[]>([])

  async function fetchListProducts() {
    try {
      const response = await api.get('beers', { params: { per_page: 8 } })
      setBeers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchListProducts()
  }, [])

  return (
    <ContainerHome>
      <Header title="Bebidas" />
      <FlatList
        data={beers}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <BeerList data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </ContainerHome>
  )
}
