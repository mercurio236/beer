import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TitleHeader, ContainerHeader } from './styles'

interface Props {
  title: string
}

export function Header({ title }: Props) {
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 42

  return (
    <ContainerHeader style={{ paddingTop }}>
      <TitleHeader>{title}</TitleHeader>
    </ContainerHeader>
  )
}
