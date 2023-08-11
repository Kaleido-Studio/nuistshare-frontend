function getUserId(jwt: string) {
  const base64Url = jwt.split('.')[1]
  // get `sub` from jwt
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  const decodedJwt = JSON.parse(window.atob(base64))
  return decodedJwt.sub
}

export { getUserId }
