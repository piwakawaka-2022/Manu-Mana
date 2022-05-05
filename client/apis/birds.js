import request from 'superagent'

export function getBirds() {
  return request.get('/api/v1/birds').then((res) => res.body)
}
