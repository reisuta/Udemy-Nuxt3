export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (body.username === 'user' && body.password === 'pass') {
    const token = 'e342wg42b2422b'
    // トークンをクッキーに保存。要CSRF対策
    setCookie(event, 'auth_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
    return {
      user: {
        id: 123408912,
        name: 'user1',
      },
      token
    }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: '認証情報が間違っています',
    })
  }
})
