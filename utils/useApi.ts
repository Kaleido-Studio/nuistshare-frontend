import { MessagePlugin } from 'tdesign-vue-next'

export default async <T>(path: string, options?: any) => {
  const login = useLogin()
  const res = await useFetch<T>(`https://api-nuistshare.dustella.net${path}`, {
    server: false,
    lazy: false,
    headers: computed(() => (
      {
        authorization: `Bearer ${login.value.token}`,
      })),
    ...options,
  })
  const error = res.error.value?.data as any
  if (error && error.message === 'Token Invalid') {
    MessagePlugin.warning('Login Expiered')
    localStorage.clear()
    location.reload()
  }
  return res
}
