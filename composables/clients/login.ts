class LoginClient {
  private successNotifier: (string) => void
  private failureNotifier: (string) => void
  private successHook: () => void
  private formData = reactive({
    email: '',
    password: '',
    remember: false,
  })

  public setSuccessNotifier = (notifier: (string) => void) => {
    this.successNotifier = notifier
    return this
  }

  public setFailureNotifier = (notifier: (string) => void) => {
    this.failureNotifier = notifier
    return this
  }

  public setSuccessHook = (hook: () => void) => {
    this.successHook = hook
    return this
  }

  constructor() {
  }

  private checkValid = () => {
    const { email, password } = this.formData
    if (!email || !password) {
      this.failureNotifier && this.failureNotifier('请填写完整')
      return false
    }
    // use regex to check email format
    const emailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!emailRegex.test(email)) {
      this.failureNotifier && this.failureNotifier('请正确填写邮箱')
      return false
    }
    return true
  }

  private invokeLogin = async () => {
    const valid = this.checkValid()
    if (!valid)
      return

    const { email, password } = this.formData
    const { data } = await useApi<{ access_token: string }>('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
    if (data.value?.access_token) {
      this.successNotifier && this.successNotifier('成功登陆')
      const login = useLogin()
      const user = useUser()
      login.setToken(data.value?.access_token)
      await user.flushUserInfo()
      this.successHook && this.successHook()
    }

    else { this.failureNotifier && this.failureNotifier() }
  }

  public build() {
    return {
      formData: this.formData,
      invokeLogin: this.invokeLogin,
    }
  }
}

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(LoginClient, import.meta.hot))

export { LoginClient }
