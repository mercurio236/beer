import { BeersProps } from '@screens/Home'
import {
  BeerImage,
  CardBeer,
  ContainerBeerList,
  Description,
  Details,
  Title,
} from './styles'
import { Button } from '@components/Button'

interface Props {
  data: BeersProps,
  onPress: () => void
}

export function BeerList({ data, onPress }: Props) {
  
  return (
    <ContainerBeerList key={data.id}>
      <CardBeer>
        <Title>{data.name}</Title>
        <BeerImage source={{ uri: data.image_url }} />
        <Description>{data.description}</Description>
        <Button title='Ver sobre' onPress={onPress}/>
      </CardBeer>
    </ContainerBeerList>
  )
}
