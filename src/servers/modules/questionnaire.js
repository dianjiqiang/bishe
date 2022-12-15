import keyieRequest from '..'

export function getQyestionnaireFuture() {
  return keyieRequest.getRequest('/future')
}
