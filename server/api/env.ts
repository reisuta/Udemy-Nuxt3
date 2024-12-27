export default defineEventHandler(() => {
  const runtimeConfig = useRuntimeConfig()

  if (process.env.NODE_ENV !== 'development') {
    throw createError({ statusCode: 403, message: 'Forbidden' })
  }

  return {
    env: process.env.MY_ENV_VARIABLE,
    runtime: runtimeConfig.apiSecret
  }
})
