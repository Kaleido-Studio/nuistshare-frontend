class ProfileClient extends BaseClient {
  private changedData = reactive({
    name: '',
    nickname: '',
    email: '',
    phone: '',
  })

  private uploadToken = ref<string>('')

  constructor() {
    super()
    const user = useUser()
    const { name, email, phone } = user
    this.changedData.name = name
    this.changedData.email = email
    this.changedData.phone = phone
  }

  /*
    async function change(type: string) {
  const body = {} as any
  body[type] = (user as any)[type]
  const res = await useApi<{ id: number }>('/api/users/me', {
    method: 'PUT',
    body,
  })
  if (res.data.value?.id)
    MessagePlugin.success('成功修改信息')

  else
    MessagePlugin.error('修改信息失败')

  // message ok
} */

  private getUploadToken = async () => {
    const { data } = await useApi<{ uploadToken: string }>('/api/upload/token', {
      method: 'GET',
    })
    const uploadToken = data.value?.uploadToken
    this.uploadToken.value = uploadToken!
    return uploadToken
  }

  public commitChanges = async () => {
    const user = useUser()
    const commit = {} as any
    const changedData = this.changedData
    if (changedData.name !== user.name)
      commit.name = changedData.name
    if (changedData.phone !== user.phone)
      commit.phone = changedData.phone
    if (changedData.email !== user.email)
      commit.email = changedData.email

    const res = await useApi<{ id: number }>('/api/users/me', {
      method: 'PUT',
      body: commit,
    })
    if (res.data.value?.id) {
      this.successNotifier('成功修改信息')
      return true
    }
    else {
      this.failureNotifier('修改信息失败')
      return false
    }
  }

  public build = () => {
    return {
      formData: this.changedData,
      commitChanges: this.commitChanges,
    }
  }
}

export { ProfileClient }
