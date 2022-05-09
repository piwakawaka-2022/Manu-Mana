import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { addSightingThunk } from '../actions/birds'

function AddBirdSighting (props) {
  const auth = useSelector((redux) => redux.auth)

  const [addLocation, setAddLocation] = useState('')
  const [addEntry] = useState({ bird_id: null, location: null, user_id: null, timestamp: null })
  const [bird, setBird] = useState('Undefined manu')
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const { id } = useParams()
  const date = new Date() // fix this to return the string of numbers

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

    dispatch(addSightingThunk(addEntry))
    setAddLocation('')
    closeAdd()
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
          !id ? <Select onChange={(e) => setBird(e.value)} options = {birdOptions} /> : null
        ) : (
          null) }
        <form onSubmit={handleSubmit}>
          <input id='' type='text' value={addLocation} onChange={handleType} />
          <input type='submit' value='Add location'/>
          <button onClick={closeAdd}>Close</button>
        </form>
      </>
    )
  }

  return (
    <div>
      {show ? renderAddBirdSighting() : <button onClick={showAdd}>Add A bird</button> }
    </div>
  )
}

export default AddBirdSighting
