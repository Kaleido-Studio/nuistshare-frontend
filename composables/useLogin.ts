export function useLogin() {
  return useState('isLoggedIn', () => ({
    lsLoggedIn: false,
    token: '',
    userId: -1,
    infoFetched: false,
  }),
  )
}
