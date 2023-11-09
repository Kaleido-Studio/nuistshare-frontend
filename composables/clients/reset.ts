class ResetPasswordClient extends BaseClient {
  private formData = reactive({
    email: '',
    newPassword: '',
    newPasswordCheck: '',
    code: '',
  })

  private timing = ref(0)

  private status = reactive({
    timing: 0,
    isSendingCode: false,
  })

  public invokeSendCode = async () => {
    this.status.isSendingCode = true
    const resp = await useApi<{ message: string }>('/api/email/send', {
      query:
         { email: this.formData.email },
    })
    if (resp.data.value?.message === 'ok') {
      this.successNotifier('发送成功')
      this.timing.value = 60
    }
    else { this.failureNotifier('发送失败, 检查邮箱') }
    this.status.isSendingCode = false
  }

  public checkValid = () => {
    if (this.formData.newPassword !== this.formData.newPasswordCheck) {
      this.failureNotifier('两次密码不一致')
      return false
    }
    if (this.formData.newPassword.length < 6) {
      this.failureNotifier('密码长度不得小于6位')
      return false
    }
    return true
  }

  public invokeReset = async () => {
    if (!this.checkValid())
      return

    const resp = await useApi<{ message: string }>('/api/users/me/password', {
      method: 'PUT',
      body: {
        email: this.formData.email,
        code: this.formData.code,
        password: this.formData.newPassword,
      },
    })
    if (resp.data.value?.message === 'ok') {
      this.successNotifier('修改成功，请重新登陆')
      const user = useUser()
      const login = useLogin()
      login.logout()
      user.flushUserInfo()
    }
    else { this.failureNotifier('重置失败, 检查验证码') }
  }

  public build() {
    return {
      formData: this.formData,
      status: this.status,
      invokeSendCode: this.invokeSendCode,
      invokeReset: this.invokeReset,
    }
  }
}

export { ResetPasswordClient }
