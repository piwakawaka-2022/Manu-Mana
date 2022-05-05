import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import Select from 'react-select'

function Map () {
  const [id, setId] = useState(0)
  const [markers, setMarkers] = useState([])
  const [bird, setBird] = useState('Undefined manu')
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

  const birdOptions = [
    { value: 'Kaka', label: 'Kaka' },
    { value: 'Piwakawaka', label: 'Piwakawaka' },
    { value: 'Kererū', label: 'Kererū' }
  ]

  function handleChange (evt) {
    setBird(evt.value)
  }

  const addMarker = (coords) => {
    setId((id) => id + 1)
    const name = bird
    setMarkers((markers) => markers.concat([{ coords, id, name }]))
    console.log(markers)
  }

  if (!isLoaded) return <div>Loading..</div>

  return (
    <div className='map-select-container'>
      <div className='select-container'>
        <Select onChange={handleChange} options = {birdOptions} />
      </div>
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
                  icon="birds/birds/bird.png"
                  label={{ text: marker.name, color: '#FFF01F' }}
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
    </div>
  )
}

export default Map
// Set up redux
// Set up database
// Change centering
