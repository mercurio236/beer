import { BeersProps } from '@screens/Home'
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

interface Props {
  data: BeersProps
  onPress: () => void
}

export function BeerList({ data, onPress }: Props) {
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
