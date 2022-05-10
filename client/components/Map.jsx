import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { saveMarkersThunk, fetchMarkers } from '../actions/markers'
import { FormControl } from '@mui/material'

function Map () {
  const dispatch = useDispatch()
  const dbMarkers = useSelector(state => state.markers)
  const [bird, setBird] = useState('Undefined manu')
  const mapRef = useRef()
  const [libraries] = useState(['places'])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDnGHfALAyWDscmt2LcSwTTrG6SMHpUFsU',
    libraries
  })
  const onLoad = useCallback((map) => (mapRef.current = map), [])
  
  let center =  { lat: -41.298493517295654, lng: 174.79978666984925 }
  function CoordState(){
   dbMarkers? 
      center =  { lat: dbMarkers[dbMarkers.length -1].lat, lng: dbMarkers[dbMarkers.length -1].lng} :
   
      center = { lat: -41.298493517295654, lng: 174.79978666984925 }
  
  }
  

  


  const options = useMemo(() => ({
    mapId: '724b7195aa686651',
    disableDefaultUI: true,
    clickableIcons: false
  }), [])

  const birdOptions = [
    { value: 'Kaka', label: 'Kaka' },
    { value: 'Piwakawaka', label: 'Piwakawaka' },
    { value: 'Kererū', label: 'Kererū' },
    { value: 'Ruru', label: 'Ruru' },
    { value: 'Kōkako', label: 'Kōkako' },
    { value: 'Bellbird', label: 'Bellbird' },
    { value: 'NZ Kingfisher', label: 'NZ Kingfisher' },
    { value: 'Tūī', label: 'Tūī' },
    { value: 'Kea', label: 'Kea' },
    { value: 'Karearea', label: 'Karearea' },
    { value: 'Yellowhead', label: 'Yellowhead' },
    { value: 'Kākāriki', label: 'Kākāriki' },
    { value: 'Pūtangitangi', label: 'Pūtangitangi' },
    { value: 'Toutouwai', label: 'Toutouwai' },
    { value: 'Pūkeko', label: 'Pūkeko' },
    { value: 'Kākāpō', label: 'Kākāpō' },
    { value: 'Takahē', label: 'Takahē' },
    { value: 'Whio', label: 'Whio' },
    { value: 'Mātātā', label: 'Mātātā' }
  ]

  function handleChange (evt) {
    setBird(evt.value)
  }

  useEffect(() => {
    dispatch(fetchMarkers())
  }, [])

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
      <div className='select-container'>
        <FormControl color='primary.dark' fullwidth>
          <Select onChange={handleChange} options = {birdOptions} />
        </FormControl>
      </div>
      <div className='map-container'>
        <GoogleMap zoom={12}
          center={center}
          mapContainerClassName="map"
          options={options}
          onLoad={onLoad}
          onClick={(e) => addMarker(e.latLng.toJSON(), CoordState())}>
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
          <p> YOU HAVE SEEN A {bird} IN PŌNEKE!</p>
        </div>
      </div>
    </>
  )
}

export default Map

// Change centering
