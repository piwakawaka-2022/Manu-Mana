/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'

function BirdSightings (props) {
  const { name, maori_name, location, bird_id, timestamp, username } = props.bird || { }

  const date = new Date(timestamp).toDateString()
  let hours = new Date(timestamp).getHours()
  const minutes = new Date(timestamp).getMinutes()
  const amOrPm = hours >= 12 ? 'pm' : 'am'

  hours = (hours % 12) || 12

  const time = `${hours}:${minutes} ${amOrPm}`

  return (
    <>
      <Container align='center'>
        <Link to={`/birds/${bird_id}`}>
          <h2>{maori_name}</h2>
        </Link>
        <h3>{name}</h3>
        <p>Date: {date} {time}</p>
        <p>Location: {location}</p>
        <p>Added by: {username}</p>
      </Container>
    </>
  )
}

export default BirdSightings
