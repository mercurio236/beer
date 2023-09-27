import { useSelector } from 'react-redux'
import { RootState } from 'src/libs/redux/store'
import {
  About,
  ContainerAbout,
  ContainerProduct,
  ImageProductDetails,
  Info,
  Line,
  LoadingProduct,
  Title,
} from './styles'
import { Header } from '@components/Header'
import { View } from 'react-native'

export function Products() {
  const { beer, isLoadingDetailBeer } = useSelector(
    (state: RootState) => state.products
  )
  return (
    <>
      <Header backpage title="Detalhe da bebida" />
      {isLoadingDetailBeer ? (
        <LoadingProduct />
      ) : (
        beer.map((singleBeer) => {
          return (
            <ContainerProduct key={singleBeer.id}>
              <Title>{singleBeer.name}</Title>
              <ImageProductDetails source={{ uri: singleBeer.image_url }} />
              <Line />
              <About>Sobre:</About>
              <ContainerAbout>
                <Info>Nome: {singleBeer.name}</Info>
                <Info>Primeira fabricação: {singleBeer.first_brewed}</Info>
                <Info>Slogan: {singleBeer.tagline}</Info>
                <Info>Atenuação: {singleBeer.attenuation_level}</Info>
                <Info>Volume: {singleBeer.volume.value}L</Info>
                <Info>abu: {singleBeer.abv}</Info>
                <Info>ibu: {singleBeer.ibu}</Info>
                <Info>ph: {singleBeer.ph}</Info>
                <Line />
                <About>Método</About>
                <Info>
                  Temperatura: {singleBeer.method.mash_temp[0].temp.value} °C
                </Info>
                <Info>Duração: {singleBeer.method.mash_temp[0].duration}</Info>
                <Info>
                  Fermentação: {singleBeer.method.fermentation.temp.value} °C
                </Info>
                <Line />
                <About>Ingredientes</About>
                {singleBeer.ingredients.malt.map((malt, index) => (
                  <View key={index}>
                    <Info>Nome: {malt.name}</Info>
                    <Info>
                      Quantidade: {malt.amount.value} {malt.amount.unit}
                    </Info>
                    <Line />
                  </View>
                ))}
                <About>Lúpulo</About>
                {singleBeer.ingredients.hops.map((lupulo, index) => (
                  <View key={index}>
                    <Info key={index}>Nome: {lupulo.name}</Info>
                    <Info>
                      Quantidade: {lupulo.amount.value} - {lupulo.amount.unit}
                    </Info>
                    <Info>Adicionar: {lupulo.add}</Info>
                    <Info>Atributo: {lupulo.attribute}</Info>
                    <Line />
                  </View>
                ))}
                <Info>Levedura: {singleBeer.ingredients.yeast}</Info>
                <Line />
                <About>Acompanhamentos</About>
                {singleBeer.food_pairing.map((food, index) => (
                  <Info key={index}>{food}</Info>
                ))}
                <Line />
                <About>Dicas de cervejeiros</About>
                <Info>{singleBeer.brewers_tips}</Info>
              </ContainerAbout>
            </ContainerProduct>
          )
        })
      )}
    </>
  )
}
