import React from 'react'

import { TitleHeader, ContainerHeader } from './styles'
import { TouchableOpacity, Dimensions } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import theme from '../../../src/theme'
import { useNavigation } from '@react-navigation/native'

interface Props {
  title: string
  backpage?: boolean
}

export function Header({ title, backpage = false }: Props) {
  const { height } = Dimensions.get('screen')
  const { goBack } = useNavigation()
  const paddingTop = (height / 15) * 1 + 8

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
