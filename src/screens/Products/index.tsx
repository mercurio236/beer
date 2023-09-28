import { useSelector } from 'react-redux'
import { RootState } from 'src/libs/redux/store'
import { Header } from '@components/Header'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { InfoBeer } from '@components/InfoBeer'

export function Products() {
  const { beer, isLoadingDetailBeer } = useSelector(
    (state: RootState) => state.products
  )
  return (
    <SafeAreaProvider>
      <Header backpage title="Detalhe da bebida" />
      <InfoBeer data={beer} isLoadingDetailBeer={isLoadingDetailBeer} />
    </SafeAreaProvider>
  )
}
