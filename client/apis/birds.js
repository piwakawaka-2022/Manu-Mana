import request from 'superagent'

export function getBirds() {
  return request.get('/api/v1/birds').then((res) => res.body)
}

export function getUserSightings() {
  return request.get('/api/v1/birds/birdsightings').then((res) => {
    return res.body
  })
}

export function addBirdSighting() {
  return request.post('/api/v1/birds')
}
