export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuth()
  console.log(to)
  console.log(from)

  if (!user.value) {
    return navigateTo('/login')
  }
})
