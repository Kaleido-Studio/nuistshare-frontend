import { MessagePlugin } from 'tdesign-vue-next'

async function useApi<T>(path: string, options?: any) {
  const login = useLogin()
  const res = await useFetch<T>(`https://api-nuistshare.dustella.net${path}`, {
    server: false,
    lazy: false,
    headers: computed(() => (
      {
        authorization: `Bearer ${login.token}`,
      })),
    ...options,
  })
  const error = res.error.value?.data as any
  if (error && error.message === 'Token Invalid')
    MessagePlugin.warning('Login Expiered')

  return res
}

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useApi, import.meta.hot))

export default useApi
