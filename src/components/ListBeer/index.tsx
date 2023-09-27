import {memo} from 'react'

import {
  BeerImage,
  CardBeer,
  ContainerBeerList,
  Description,
  Details,
  Line,
  Title,
} from './styles'
import { Button } from '@components/Button'
import { DTOBeer } from '@dtos/datailBeer'

interface Props {
  data: DTOBeer
  onPress: () => void
}

function ListBeer({ data, onPress }: Props) {
  return (
    <ContainerBeerList key={data.id}>
      <CardBeer>
        <Title>{data.name}</Title>
        <BeerImage source={{ uri: data.image_url }} />
        <Line />
        <Details>Descrição:</Details>
        <Description>{data.description}</Description>
        <Line />
        <Button title="Ver sobre" onPress={onPress} />
      </CardBeer>
    </ContainerBeerList>
  )
}

export default memo(ListBeer)
