import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { addSightingThunk } from '../actions/birds'
import { Button, Container, TextField, Box, FormControl } from '@mui/material'
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
    { value: 10, label: 'KAKA' },
    { value: 8, label: 'PIWAKAWAKA' },
    { value: 6, label: 'KERERŪ' },
    { value: 1, label: 'RURŪ' },
    { value: 2, label: 'KŌKAKO' },
    { value: 3, label: 'KORIMAKO' },
    { value: 4, label: 'KŌTARE' },
    { value: 5, label: 'TŪĪ' },
    { value: 7, label: 'KEA' },
    { value: 9, label: 'KAREAREA' },
    { value: 11, label: 'MOHUA' },
    { value: 12, label: 'KĀKĀRIKI' },
    { value: 13, label: 'PŪTANGITANGI' },
    { value: 14, label: 'TOUTOUWAI' },
    { value: 15, label: 'PŪKEKO' },
    { value: 17, label: 'KĀKĀPŌ' },
    { value: 18, label: 'TAKAHĒ' },
    { value: 19, label: 'WHIO' },
    { value: 20, label: 'MĀTĀTĀ' }
  ]

  const renderAddBirdSighting = () => {
    return (
      <>
        { show ? (
          !id ? <FormControl color='primary' variant="filled"><Select className='register' onChange={handleChange} options={birdOptions} placeholder='SELECT MANU' /></FormControl> : null
        ) : (
          null) }
        <Box height='10px'></Box>
        <form onSubmit={handleSubmit}>
          <TextField className='register' id='' type='text' text-size='medium' placeholder="TELL US WHERE..." value={addLocation} onChange={handleType} />
          <div>
            <Box height='10px'></Box>
          </div>
          <Button className='register' variant='contained' type='submit' value='add location' endIcon={<AddLocationAltIcon />} >ADD TO SIGHTINGS</Button>
          <div>
            <Box height='10px'></Box>
          </div>
          <Button className='register' variant='contained' endIcon={<CloseIcon />} onClick={closeAdd}>CLOSE</Button>
        </form>
        <p>{responseTextFail}</p>
      </>
    )
  }

  return (
    <div>
      <Container align='center'>
        {show ? renderAddBirdSighting() : <Button variant='contained' endIcon={<VisibilityIcon />} onClick={showAdd}>SEEN A MANU? ADD IT TO YOUR SIGHTINGS</Button> }
        <p>{responseTextPass}</p>
      </Container>
    </div>
  )
}

export default AddBirdSighting
