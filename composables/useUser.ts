function useUser() {
  return useState('user', () => ({
    id: -1,
    name: '',
    email: '',
    avatar: '',
    phone: '',
    verified: false,

  }))
}

export default useUser
