/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

function BirdSightings (props) {
  const { name, maori_name, location, bird_id, timestamp, username } = props.bird || { }

  const date = new Date(timestamp).toDateString()
  const hours = new Date(timestamp).getHours()
  let minutes = new Date(timestamp).getMinutes()

  const amOrPm = hours <= 12 ? 'AM' : 'PM'
  const adjustHours = hours < 12 ? hours : hours % 12

  minutes = minutes < 10 ? '0' + minutes : minutes

  const time = `${adjustHours}:${minutes} ${amOrPm}`

  return (
    <>
      <div className='global-bird-sighting'>
        <Link to={`/birds/${bird_id}`}>
          <div>
            <h2>{maori_name.toUpperCase()}</h2>
            <h3>{name.toUpperCase()}</h3>
            <p>DATE: {date.toUpperCase()} {time}</p>
            <p>LOCATION: {location.toUpperCase()}</p>
            <p>ADDED BY: {username.toUpperCase()}</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default BirdSightings
