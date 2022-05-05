/* eslint-disable comma-dangle */
import { getMarkers, postMarker } from '../apis/markers'

export const ADD_MARKER = 'ADD_MARKER'
export const RECEIVE_MARKERS = 'RECEIVE_MARKERS'

// ACTIONS

export function addFoundPet(marker) {
  return {
    type: ADD_MARKER,
    marker,
  }
}

export function receiveFoundPet(marker) {
  return {
    type: RECEIVE_MARKERS,
    marker,
  }
}

// THUNKS

export function saveMarkers(marker) {
  return (dispatch) => {
    postMarker(marker)
      .then((markerObj) => dispatch(addFoundPet(markerObj)))
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function fetchMarkers(markers) {
  return (dispatch) => {
    getMarkers(markers)
      .then((markersArr) => dispatch(receiveFoundPet(markersArr)))
      .catch((err) => {
        console.log(err.message)
      })
  }
}
