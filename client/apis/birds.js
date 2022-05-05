import request from 'superagent'

export function getBirds() {
  return request.get('/api/v1/').then((res) => res.body)
}
