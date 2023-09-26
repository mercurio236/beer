import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import { api } from '../../lib/services/axios'

interface BeersProps {
  id: number | null
  name: string
  description: string
}

export function Home() {
  const [beers, setBeers] = useState<BeersProps[]>([])

  async function fetchListProducts() {
    try {
      const response = await api.get('beers')
      setBeers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchListProducts()
  }, [])

  return (
    <View>
      <Text>
        {beers.map((beer) => {
          return (
            <View style={{flex:1, justifyContent:'center'}}>
              <Text style={{ color: '#000' }}>{beer.description}</Text>
            </View>
          )
        })}
      </Text>
    </View>
  )
}
