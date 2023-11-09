import type { UserProfile } from './types/User'

const useUser = defineStore('user', () => {
  const user = reactive({
    id: -1,
    name: '',
    email: '',
    avatar: '',
    phone: '',
    verified: false,
  })

  const flushUserInfo = async () => {
    const { data } = await useApi<UserProfile>('/api/users/me')
    const { id, name, email, avatar, phone, verified } = data.value!
    user.id = id
    user.name = name
    user.email = email
    user.avatar = avatar
    user.phone = phone
    user.verified = verified
  }

  return {
    ...toRefs(user),
    flushUserInfo,
  }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))

export default useUser
