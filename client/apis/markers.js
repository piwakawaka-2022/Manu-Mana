import request from 'superagent'

export function getMarkers() {
  return request.get('/api/v1/markers').then((resp) => resp.body)
}

export function postMarker(Marker) {
  return request
    .post('/api/v1/markers')
    .send(Marker)
    .then((resp) => resp.body)
}
