import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { saveMarkersThunk, fetchMarkers } from '../actions/markers'
import { FormControl } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'

function Map () {
  const mapRef = useRef()
  const dispatch = useDispatch()
  const dbMarkers = useSelector(state => state.markers)

  const [bird, setBird] = useState('UNDEFINED MANU')
  const [coord, setCoord] = useState({ lat: -41.298493517295654, lng: 174.79978666984925 })
  const [libraries] = useState(['places'])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDnGHfALAyWDscmt2LcSwTTrG6SMHpUFsU',
    libraries
  })
  const onLoad = useCallback((map) => (mapRef.current = map), [])

  useEffect(() => {
    dispatch(fetchMarkers())
  }, [])

  const options = useMemo(() => ({
    mapId: '724b7195aa686651',
    disableDefaultUI: true,
    clickableIcons: false
  }), [])

  const birdOptions = [
    { value: 'KAKA', label: 'KAKA' },
    { value: 'PIWAKAWAKA', label: 'PIWAKAWAKA' },
    { value: 'KERERŪ', label: 'KERERŪ' },
    { value: 'RURŪ', label: 'RURŪ' },
    { value: 'KŌKAKO', label: 'KŌKAKO' },
    { value: 'KORIMAKO', label: 'KORIMAKO' },
    { value: 'KŌTARE', label: 'KŌTARE' },
    { value: 'TŪĪ', label: 'TŪĪ' },
    { value: 'KEA', label: 'KEA' },
    { value: 'KAREAREA', label: 'KAREAREA' },
    { value: 'MOHUA', label: 'MOHUA' },
    { value: 'KĀKĀRIKI', label: 'KĀKĀRIKI' },
    { value: 'PŪTANGITANGI', label: 'PŪTANGITANGI' },
    { value: 'TOUTOUWAI', label: 'TOUTOUWAI' },
    { value: 'PŪKEKO', label: 'PŪKEKO' },
    { value: 'KĀKĀPŌ', label: 'KĀKĀPŌ' },
    { value: 'TAKAHĒ', label: 'TAKAHĒ' },
    { value: 'WHIO', label: 'WHIO' },
    { value: 'MĀTĀTĀ', label: 'MĀTĀTĀ' }
  ]

  const handleChange = (evt) => {
    setBird(evt.value)
  }

  const mapClick = (e) => {
    addMarker(e.latLng.toJSON())
    setCoord(e.latLng.toJSON())
  }

  const addMarker = (coords) => {
    const name = bird
    const markers = {
      name: name,
      coords: coords
    }
    dispatch(saveMarkersThunk(markers))
  }

  if (!isLoaded) return <div>Loading..</div>

  return (
    <>
      <StyledEngineProvider injectFirst>
        <FormControl color='primary' variant="filled" fullwidth="true">
          <Select onChange={handleChange} options = {birdOptions} />
        </FormControl>
      </StyledEngineProvider>
      <div className='map-container'>
        <GoogleMap zoom={12}
          center={coord}
          mapContainerClassName="map"
          options={options}
          onLoad={onLoad}
          onClick={(e) => mapClick(e)}>
          { dbMarkers.map((marker) => {
            return (
              <Marker
                key={marker.id}
                draggable={true}
                position={{ lat: marker.lat, lng: marker.lng }}
                onDragEnd={e => marker.coords = e.latLng.toJSON()}
                icon="birds/MAP_ICON.png"
                label={{ text: marker.name, color: 'white' }}
              />
            )
          })
          }
        </GoogleMap>
        <div className='bird-paragraph'>
          <p> {`YOU HAVE SEEN A ${bird.toUpperCase()} IN PŌNEKE!`}</p>
        </div>
      </div>
    </>
  )
}

export default Map

// Change centering
