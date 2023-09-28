import styled, { css } from 'styled-components/native'

export const ContainerListEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Message = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE?.SM}px;
    color: ${theme.COLORS?.GRAY_400};
  `}
`
