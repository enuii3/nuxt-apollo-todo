import { ApolloError } from '@apollo/client'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'

export interface ApolloQueryHandler<Query, Variables> {
  query: TypedDocumentNode<Query, Variables>
  variables?: Variables
  successCallback?: (result: Query) => void
  errorCallback?: (errorMessages: string[], error: ApolloError) => void
}

export interface ApolloMutationHandler<Mutation, Variables> {
  mutation: TypedDocumentNode<Mutation, Variables>
  variables?: Variables
  successCallback?: (result: Mutation) => void
  errorCallback?: (errorMessages: string[], error: ApolloError) => void
}

/**
 * apolloClient.query()のラッパー。
 *
 * エラー時は画面にtoastを表示。
 * また、errorCallbackを実行する。successCallbackではerrorを使用できる。
 *
 * 成功時はsuccessCallbackを実行する。successCallbackではqueryの結果を使用できる。
 * successCallbackのエラーハンドリングは呼び出し元で行う。
 */
export const apolloQueryHandler = async <Query, Variables>({
  query,
  variables,
  successCallback = () => {},
  errorCallback = () => {},
}: ApolloQueryHandler<Query, Variables>) => {
  const { $apollo } = useNuxtApp()

  const response = await $apollo
    .query({
      query,
      variables,
    })
    .catch((error: ApolloError) => {
      console.log(error)

      const errorMessages = error.networkError
        ? ['接続できませんでした。']
        : error.graphQLErrors.map((e) => e.message)

      errorCallback(errorMessages, error)
    })
  if (response?.data) {
    // successCallbackの内容次第ではerrorがthrowされる可能性あり
    await successCallback(response.data)
    return response.data as Query
  }
}

/**
 * apolloClient.mutate()のラッパー。mutateになった以外はapolloQueryHandlerと同じ
 *
 * エラー時は画面にtoastを表示。
 * また、errorCallbackを実行する。successCallbackではerrorを使用できる。
 *
 * 成功時はsuccessCallbackを実行する。successCallbackではqueryの結果を使用できる。
 * successCallbackのエラーハンドリングは呼び出し元で行う。
 */
export const apolloMutationHandler = async <Mutation, Variables>({
  mutation,
  variables,
  successCallback = () => {},
  errorCallback = () => {},
}: ApolloMutationHandler<Mutation, Variables>) => {
  const { $apollo } = useNuxtApp()

  const response = await $apollo
    .mutate({
      mutation,
      variables,
    })
    .catch((error: ApolloError) => {
      error.graphQLErrors.forEach((e) => console.log(e.extensions))

      const errorMessages = error.networkError
        ? ['接続できませんでした。']
        : error.graphQLErrors.map((e) => e.message)

      errorCallback(errorMessages, error)
    })

  if (response?.data) {
    // successCallbackの内容次第ではerrorがthrowされる可能性あり
    await successCallback(response.data)
    return response.data as Mutation
  }
}
