import { useApiStatusStore } from '~/store/apiStatus'

export const useApiFetch = () => {
  const apiStatusStore = useApiStatusStore()
  // const runtimeConfig = useRuntimeConfig()
  const api = $fetch.create({
    // 本来であれば外部APIのホスト名などをいれる
    // baseURL: `${runtimeConfig.public.apiUrl}`,
    onResponse: (response) => {
      apiStatusStore.setStatusCode(response.response.status)
    }
  })

  return {
    api
  }
}
