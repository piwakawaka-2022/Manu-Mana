import React, { useState } from 'react'

function AddBirdSighting () {
  const [location, setLocation] = useState('')

  const handleType = (e) => {
    setLocation(e.target.value)
    console.log(location)
  }

  ///function for sending text from text box to db 
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input id='' type='text' value={location} onChange={handleType} />
        <input type='submit' value='Add location'/>
      </form>
    </div>
  )
}

export default AddBirdSighting
