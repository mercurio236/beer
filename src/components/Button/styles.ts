import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const ContainerButton = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS?.BLUE_700 : theme.COLORS?.BLUE_500};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`
export const TitleButton = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE?.MD}px;
    color: ${theme.COLORS?.WHITE};
    font-weight: bold;
  `}
`
