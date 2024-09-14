export function useAuth() {
  const user = useState('user', () => undefined)
  const token = useState('token', () => undefined)

  const login = async (username: string, password: string) => {
    const { data, error } = await useFetch('/api/login', {
      method: 'POST',
      body: { username, password }
    })

    if (error.value) {
      console.error('ログインに失敗しました')
    } else {
      token.value = data.value?.token
      user.value = data.value?.user
    }
  }

  const logout = () => {
    token.value = undefined
    user.value = undefined
    navigateTo('/login')
  }

  return {
    user,
    token,
    login,
    logout,
  }
}
