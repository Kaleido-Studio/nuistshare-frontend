export default <T>(path: string, options?: any) => {
  const login = useLogin()
  return useFetch<T>(`https://api-nuistshare.dustella.net${path}`, {
    server: false,
    lazy: false,
    headers: computed(() => (
      {
        authorization: `Bearer ${login.value.token}`,
      })),
    ...options,
  })
}
