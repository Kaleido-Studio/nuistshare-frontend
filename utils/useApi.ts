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
  const data = res.data.value as any
  if ((data.code === 401 || data.code === 403) && data.message === 'Token Invalid') {
    MessagePlugin.warning('Login Expiered')
    localStorage.clear()
    location.reload()
  }
  return res
}
