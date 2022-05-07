import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Select from 'react-select'

function AddBirdSighting (props) {
  const [location, setLocation] = useState('')

  const { id } = useParams()

  const handleType = (e) => {
    setLocation(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  function handleSelectChange (evt) {
    setBird(evt.value)
  }

  const birdOptions = [
    { value: 'Ruru/Morepork', label: 'Ruru/Morepork', id: 1 },
    { value: 'Kōkako', label: 'Kōkako', id: 2 },
    { value: 'Korimako/Bellbird', label: 'Korimako/Bellbird', id: 3 },
    { value: 'Kōtare/Aotearoa Kingfisher', label: 'Kōtare/Aotearoa Kingfisher', id: 4 },
    { value: 'Tūī', label: 'Tūī', id: 5 },
    { value: 'Kererū/Aotearoa Wood Pigeon', label: 'Kererū/Aotearoa Wood Pigeon', id: 6 },
    { value: 'Kea', label: 'Kea', id: 7 },
    { value: 'Pīwakawaka/Aotearoa Fantail', label: 'Pīwakawaka/Aotearoa Fantail', id: 8 },
    { value: 'Karearea/Aotearoa Falcon', label: 'Karearea/Aotearoa Falcon', id: 9 },
    { value: 'Kākā', label: 'Kākā', id: 10 },
    { value: 'Mohua/Yellowhead', label: 'Mohua/Yellowhead', id: 11 },
    { value: 'Kākāriki/Red-crowned Parakeet', label: 'Kākāriki/Red-crowned Parakeet', id: 12 },
    { value: 'Pūtangitangi/Paradise Shelduck', label: 'Pūtangitangi/Paradise Shelduck', id: 13 }
  ]

  return (
    <div>
      { id ? <Select onChange={handleSelectChange} options = {birdOptions} /> : console.log('no id') }
      <form onSubmit={handleSubmit} >
        <input id='' type='text' value={location} onChange={handleType} />
        <input type='submit' value='Add location'/>
      </form>
    </div>
  )
}

export default AddBirdSighting
