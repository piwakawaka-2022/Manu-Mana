/* eslint-disable comma-dangle */
import { getMarkers, postMarker } from '../apis/markers'

export const ADD_MARKER = 'ADD_MARKER'
export const RECEIVE_MARKERS = 'RECEIVE_MARKERS'

// ACTIONS

export function addMarker(marker) {
  return {
    type: ADD_MARKER,
    marker,
  }
}

export function receiveMarker(markers) {
  return {
    type: RECEIVE_MARKERS,
    markers,
  }
}

// THUNKS

export function saveMarkersThunk(marker) {
  return (dispatch) => {
    postMarker(marker)
      .then((markerObj) => dispatch(addMarker(markerObj)))
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function fetchMarkers(markers) {
  return (dispatch) => {
    getMarkers(markers)
      .then((markersArr) => dispatch(receiveMarker(markersArr)))
      .catch((err) => {
        console.log(err.message)
      })
  }
}
