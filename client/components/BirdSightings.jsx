/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'



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
      <div className='global-bird-sighting'>
              <Link to={`/birds/${bird_id}`}>
                <div>
                <h2>{maori_name}</h2>
                <h3>{name}</h3>
                  <p>Date: {date} {time}</p>
                  <p>Location: {location}</p>
                  <p>Added by: {username}</p>
                 </div>
              </Link>   
      </div>
    </>
  )
}

export default BirdSightings
