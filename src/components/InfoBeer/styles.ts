import { Image } from 'react-native'
import styled from "styled-components/native";

export const ContainerProduct = styled.ScrollView`
  flex: 1;
  padding: 24px;
`
export const ImageProductDetails = styled(Image).attrs({
  height: 250,
  resizeMode: 'contain',
})`
  margin-top: 40px;
  margin-bottom: 20px;
`
export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Line = styled.View`
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin: 5px 0 6px 0;
`
export const About = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const ContainerAbout = styled.View`
  flex-grow: 1;
  margin-bottom: 50px;
`

export const Info = styled.Text`
  margin-top: 5px;
  margin-bottom: 2px;
`

export const LoadingProduct = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.BLUE_700,
  }))`
    flex: 1;
    justify-content: center;
    align-items: center;
  `