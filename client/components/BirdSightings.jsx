/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

function BirdSightings (props) {
  const { name, maori_name, location, id, timestamps } = props.bird

  const date = new Date(timestamps).toDateString()
  const time = new Date(timestamps).toLocaleTimeString()

  return (
    <>
      <div>
        <Link to={`/birds/${id}`}>
          <h2>{maori_name}</h2>
        </Link>
        <h3>{name}</h3>
        <p>Date: {date} {time}</p>
        <p>Location: {location}</p>
      </div>
    </>
  )
}

export default BirdSightings
