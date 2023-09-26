import { ButtonTypeStyleProps, ContainerButton, TitleButton } from './styles'

type Props = {
  type?: ButtonTypeStyleProps
  title: string
}

export function Button({ type = 'PRIMARY', title, ...rest }: Props) {
  return (
    <ContainerButton type={type} {...rest}>
      <TitleButton>{title}</TitleButton>
    </ContainerButton>
  )
}
