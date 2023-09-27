import styled from 'styled-components/native'

export const ContainerProduct = styled.ScrollView`
  flex: 1;
`

export const LoadingProduct = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.BLUE_700,
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`
