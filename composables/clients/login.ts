class LoginClient extends BaseClient {
  private formData = reactive({
    email: '',
    password: '',
    remember: false,
  })

  private checkValid = () => {
    const { email, password } = this.formData
    if (!email || !password) {
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
      this.successNotifier('成功登陆')
      const login = useLogin()
      const user = useUser()
      login.setToken(data.value?.access_token)
      await user.flushUserInfo()
      this.successHook()
    }

    else { this.failureNotifier(`登陆失败${data.value!}`) }
  }

  public build() {
    return {
      formData: this.formData,
      invokeLogin: this.invokeLogin,
    }
  }
}

export { LoginClient }
