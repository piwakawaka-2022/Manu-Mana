/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

function BirdSightings (props) {
  const { name, maori_name, location, bird_id, timestamps, username, user_id } = props.bird

  const date = new Date(timestamps).toDateString()

  return (
    <>
      <div>
        <Link to={`/birds/${bird_id}`}>
          <h2>{maori_name}</h2>
        </Link>
        <h3>{name}</h3>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        <p>Added by: {user_id === 0 ? 'Anonymous' : username}</p>
      </div>
    </>
  )
}

export default BirdSightings
