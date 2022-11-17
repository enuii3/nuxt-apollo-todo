import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'

export const useApollo = () => {
  const { $apollo } = useNuxtApp()
  return $apollo as ApolloClient<NormalizedCacheObject>
}
