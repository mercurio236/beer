import { Image } from 'react-native'
import styled from 'styled-components/native'

export const ContainerBeerList = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const CardBeer = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS?.GRAY_200};
  margin: 20px;
  border-radius: 8px;
  padding: 15px;
  width: 80%;
  height: auto;
`

export const BeerImage = styled(Image).attrs({
  height: 200,
  resizeMode: 'contain',
})`
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE?.LG}px;
  font-weight: 600;
  margin: 5px;
  text-align: center;
`

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE?.XS}px;
  margin: 10px 0px 10px 0px;
`

export const Details = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE?.SM}px;
  font-weight: 600;
`

export const Line = styled.View`
  border-top-width: 1px;
  border-color: ${({theme}) => theme.COLORS?.GRAY_200};
  margin: 5px 0 6px 0;

` 


