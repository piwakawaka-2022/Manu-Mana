/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

function BirdSightings (props) {
  const { name, maori_name, location, bird_id, timestamps, username } = props.bird || { }

  const date = new Date(timestamps).toDateString()
  const time = new Date(timestamps).toLocaleTimeString()

  // if (time[0] > 0 && time[1] > 2) {
  //   console.log(time + ' pm')
  // } else {
  //   console.log(time + ' am')
  // }

  return (
    <>
      <div>
        <Link to={`/birds/${bird_id}`}>
          <h2>{maori_name}</h2>
        </Link>
        <h3>{name}</h3>
        <p>Date: {date} {time}</p>
        <p>Location: {location}</p>
        <p>Added by: {username}</p>
      </div>
    </>
  )
}

export default BirdSightings
