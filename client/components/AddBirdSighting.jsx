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
