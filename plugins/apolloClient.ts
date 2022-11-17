import { ApolloClient, InMemoryCache } from '@apollo/client/core'

export default defineNuxtPlugin(() => {
  const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
  })

  return {
    provide: {
      apollo: client,
    },
  }
})
