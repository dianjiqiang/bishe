import keyieRequest from '..'

export function getHomeTitle() {
  return keyieRequest.getRequest('/title')
}
