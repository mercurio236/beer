import { useSelector } from 'react-redux'
import { RootState } from 'src/libs/redux/store'
import { ContainerProduct } from './styles'
import { Header } from '@components/Header'

export function Products() {
  const { beer } = useSelector((state: RootState) => state.products)
  

  return (
    <ContainerProduct>
        <Header backpage title='Detalhe da bebida'/>
    </ContainerProduct>
  )
}
