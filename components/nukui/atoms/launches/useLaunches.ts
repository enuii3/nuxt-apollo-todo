import { LaunchListDocument, LaunchFragment } from '~~/graphql'
import { apolloQueryHandler } from '~~/utils/apollo'

export function useLaunches() {
  const list = ref<LaunchFragment[]>()
  const isLoading = ref(false)
  const actions = {
    async fetchList() // params?: Partial<SnippetStoreVariables>,
    {
      isLoading.value = true
      await apolloQueryHandler({
        query: LaunchListDocument,
        successCallback(result) {
          if (result.launches) {
            list.value = result.launches.launches
            // paginator.value = result.snippets.paginatorInfo
          }
        },
      })
      isLoading.value = false
    },
  }

  return { list, isLoading, ...actions }
}
