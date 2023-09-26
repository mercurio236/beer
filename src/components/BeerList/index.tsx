import { BeersProps } from '@screens/Home'
import {
  BeerImage,
  CardBeer,
  ContainerBeerList,
  Description,
  Details,
  Title,
} from './styles'
import { Text, Image } from 'react-native'

interface Props {
  data: BeersProps
}

export function BeerList({ data }: Props) {
  return (
    <ContainerBeerList key={data.id}>
      <CardBeer>
        <Title>{data.name}</Title>
        <BeerImage source={{ uri: data.image_url }} />
        <Description>{data.description}</Description>
      </CardBeer>
    </ContainerBeerList>
  )
}
