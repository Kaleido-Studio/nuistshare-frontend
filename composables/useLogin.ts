export function useLogin() {
  return useState('isLoggedIn', () => ({
    lsLoggedIn: localStorage.getItem('token') !== null,
    token: localStorage.getItem('token') || '',
  }),
  )
}
