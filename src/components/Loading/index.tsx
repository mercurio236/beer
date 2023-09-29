import { ContainerLoading, LoadingIndicator } from './styles'

export function Loading() {
  return (
    <ContainerLoading>
      <LoadingIndicator testID='loading-general'/>
    </ContainerLoading>
  )
}
