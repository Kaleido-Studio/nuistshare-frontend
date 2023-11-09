import { MessagePlugin } from 'tdesign-vue-next'

async function useApi<T>(path: string, options?: any) {
  const login = useLogin()

  const headers = computed(() => {
    if (login.isLoggedIn)
      return { authorization: `Bearer ${login.token}` }
    else
      return {}
  })
  const res = await useFetch<T>(`https://api-nuistshare.dustella.net${path}`, {
    server: false,
    lazy: false,
    headers,
    ...options,
  })
  const error = res.error.value?.data as any
  if (error && error.message === 'Token Invalid')
    MessagePlugin.warning('Login Expiered')

  return res
}

export default useApi
