export default <T>(path: string, options?: any) => {
  return useFetch<T>(`https://api-nuistshare.dustella.net${path}`, {
    server: false,
    ...options,
  })
}
