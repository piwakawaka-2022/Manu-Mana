import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { addSightingThunk } from '../actions/birds'
import { Button, Container, TextField } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import CloseIcon from '@mui/icons-material/Close'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'

function AddBirdSighting () {
  const auth = useSelector((redux) => redux.auth)

  const [addLocation, setAddLocation] = useState('')
  const [addEntry] = useState({ bird_id: null, location: null, user_id: null, timestamp: null })
  const [responseTextFail, setResponseTextFail] = useState(null)
  const [responseTextPass, setResponseTextPass] = useState(null)
  const [bird, setBird] = useState('UNDEFINED MANU')
  const [birdName, setBirdName] = useState('')
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const { id } = useParams()
  const date = new Date()

  const handleType = (e) => {
    setAddLocation(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!id) {
      addEntry.bird_id = bird
    } else {
      addEntry.bird_id = id
    }
    addEntry.location = addLocation
    addEntry.timestamp = date
    addEntry.user_id = auth.user.id

    validatePost()
  }

  const validatePost = () => {
    if (addEntry.location === '') {
      setResponseTextFail('PLEASE ENTER A LOCATION')
    } else {
      dispatch(addSightingThunk(addEntry))
      setAddLocation('')
      setResponseTextPass(`SUCCESSFULLY ADDED ${birdName.toUpperCase()} TO SIGHTINGS`)
      closeAdd()
    }
  }

  const handleChange = (e) => {
    setBird(e.value)
    setBirdName(e.label)
  }

  const showAdd = () => setShow(true)
  const closeAdd = () => setShow(false)

  const birdOptions = [
    { value: 1, label: 'Ruru/Morepork' },
    { value: 2, label: 'Kōkako' },
    { value: 3, label: 'Korimako/Bellbird' },
    { value: 4, label: 'Kōtare/Aotearoa Kingfisher' },
    { value: 5, label: 'Tūī', id: 5 },
    { value: 6, label: 'Kererū/Aotearoa Wood Pigeon' },
    { value: 7, label: 'Kea', id: 7 },
    { value: 8, label: 'Pīwakawaka/Aotearoa Fantail' },
    { value: 9, label: 'Karearea/Aotearoa Falcon' },
    { value: 10, label: 'Kākā' },
    { value: 11, label: 'Mohua/Yellowhead' },
    { value: 12, label: 'Kākāriki/Red-crowned Parakeet' },
    { value: 13, label: 'Pūtangitangi/Paradise Shelduck' }
  ]

  const renderAddBirdSighting = () => {
    return (
      <>
        { show ? (
          !id ? <Select className='register' onChange={handleChange} options = {birdOptions} /> : null
        ) : (
          null) }
        <form onSubmit={handleSubmit}>
          <TextField className='register' id='' type='text' value={addLocation} onChange={handleType} />
          <Button className='register' variant='contained' type='submit' value='add location' endIcon={<AddLocationAltIcon />} >ADD LOCATION</Button>
          <Button className='register' variant='contained' endIcon={<CloseIcon />} onClick={closeAdd}>CLOSE</Button>
        </form>
        <p>{responseTextFail}</p>
      </>
    )
  }

  return (
    <div>
      <Container align='center'>
        {show ? renderAddBirdSighting() : <Button variant='contained' endIcon={<VisibilityIcon />} onClick={showAdd}>SEEN THIS MANU? ADD IT TO YOUR SIGHTINGS</Button> }
        <p>{responseTextPass}</p>
      </Container>
    </div>
  )
}

export default AddBirdSighting
