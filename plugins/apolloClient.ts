import { ApolloClient, InMemoryCache } from '@apollo/client/core'

export default defineNuxtPlugin(() => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  })

  return {
    provide: {
      apollo: client,
    },
  }
})
