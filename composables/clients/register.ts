class RegisterClient {
  private successNotifier: (msg: string) => void = (_: string) => { }
  private failureNotifier: (msg: string) => void = (_: string) => { }
  private successHook: () => void = () => { }
  private formData = reactive({
    email: '',
    password: '',
    name: '',
    remember: false,
  })

  public setSuccessNotifier = (notifier: (msg: string) => void) => {
    this.successNotifier = notifier
    return this
  }

  public setFailureNotifier = (notifier: (msg: string) => void) => {
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
    const { email, password, name } = this.formData
    if (!email || !password || !name) {
      this.failureNotifier('请填写完整')
      return false
    }
    // use regex to check email format
    const emailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!emailRegex.test(email)) {
      this.failureNotifier('请正确填写邮箱')
      return false
    }
    return true
  }

  private invokeRegister = async () => {
    const valid = this.checkValid()
    if (!valid)
      return

    const { email, password, name } = this.formData
    const { data } = await useApi<{ access_token: string }>('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, username: name }),
    })
    if (data.value?.access_token) {
      this.successNotifier('注册成功')
      const login = useLogin()
      const user = useUser()
      login.setToken(data.value?.access_token)
      await user.flushUserInfo()
      this.successHook()
    }
    else {
      this.failureNotifier(`注册失败,${data.value}`)
    }
  }

  public build() {
    return {
      formData: this.formData,
      invokeRegister: this.invokeRegister,
    }
  }
}

export { RegisterClient }
