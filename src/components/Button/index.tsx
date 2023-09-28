import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, ContainerButton, TitleButton } from './styles'

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps
  title: string
}

export function Button({ type = 'PRIMARY', title, ...rest }: Props) {
  return (
    <ContainerButton type={type} {...rest} testID='button-id'>
      <TitleButton>{title}</TitleButton>
    </ContainerButton>
  )
}
