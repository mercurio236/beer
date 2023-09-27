import styled from 'styled-components/native'

export const ContainerHome = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const TitleHome = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const LoadingHome = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.BLUE_700,
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`
