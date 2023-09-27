import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TitleHeader, ContainerHeader } from './styles'
import { TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import theme from '../../../src/theme'
import { useNavigation } from '@react-navigation/native'

interface Props {
  title: string
  backpage?: boolean
}

export function Header({ title, backpage = false }: Props) {
  const insets = useSafeAreaInsets()
  const { goBack } = useNavigation()
  const paddingTop = insets.top + 42

  return (
    <ContainerHeader
      style={{
        paddingTop,
        justifyContent: backpage ? 'space-between' : 'center',
      }}
    >
      {backpage && (
        <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
          <ArrowLeft size={24} weight="bold" color={theme.COLORS.GRAY_100} />
        </TouchableOpacity>
      )}
      <TitleHeader>{title}</TitleHeader>
    </ContainerHeader>
  )
}
