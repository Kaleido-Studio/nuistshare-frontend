import { defineStore } from 'pinia'

function getUserId(jwt: string) {
  const base64Url = jwt.split('.')[1]
  // get `sub` from jwt
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  const decodedJwt = JSON.parse(window.atob(base64))
  return decodedJwt.sub
}

const useLogin = defineStore('login', () => {
  const loginStatus = reactive({
    isLoggedIn: false,
    token: '',
    userId: -1,
    infoFetched: false,
  })

  const initData = () => {
    const token = localStorage.getItem('token')
    if (token) {
      const id = getUserId(token)
      loginStatus.isLoggedIn = true
      loginStatus.token = token
      loginStatus.userId = id
    }
  }

  const setToken = (token: string) => {
    loginStatus.isLoggedIn = true
    loginStatus.token = token
    loginStatus.userId = getUserId(token)
    localStorage.setItem('token', token)
  }

  const logout = () => {
    loginStatus.isLoggedIn = false
    loginStatus.token = ''
    loginStatus.userId = -1
    localStorage.clear()
  }

  return {
    ...toRefs(loginStatus),
    initData,
    setToken,
    logout,
  }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLogin, import.meta.hot))

export { useLogin }
