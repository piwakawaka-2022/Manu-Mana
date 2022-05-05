import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'

function Map () {
  const [id, setId] = useState(0)
  const [markers, setMarkers] = useState([])

  const mapRef = useRef()
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDnGHfALAyWDscmt2LcSwTTrG6SMHpUFsU',
    libraries: ['places']
  })
  const onLoad = useCallback((map) => (mapRef.current = map), [])

  const center = { lat: -41.298493517295654, lng: 174.79978666984925 }
  const options = useMemo(() => ({
    mapId: '724b7195aa686651',
    disableDefaultUI: true,
    clickableIcons: false
  }), [])
  const addMarker = (coords) => {
    setId((id) => id + 1)
    setMarkers((markers) => markers.concat([{ coords, id }]))
    console.log(markers)
  }
  if (!isLoaded) return <div>Loading..</div>

  return (
    <div className='map-container'>
      <GoogleMap zoom={12}
        center={center}
        mapContainerClassName="map"
        options={options}
        onLoad={onLoad}
        onClick={(e) => addMarker(e.latLng.toJSON())}>
        {markers ? (
          markers.map((marker) => {
            return (
              <Marker
                key={marker.id}
                draggable={true}
                position={marker.coords}
                onDragEnd={e => marker.coords = e.latLng.toJSON()}
              />
            )
          })
        ) : null }
      </GoogleMap>

      {/* Turn Below button into a global Clear map every 7days */}
      <button
        type="button"
        onClick={() => setMarkers([])}
      >CLEAR MAP</button>
    </div>
  )
}

export default Map
