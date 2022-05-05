/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

function GlobalBird (props) {
  const { english_name, maori_name, date, location, id } = props.bird

  return (
    <>
      <div>
        <Link to={`/birds/${id}`}>
          <h2>{maori_name}</h2>
        </Link>
        <h3>{english_name}</h3>
        <p>Date spotted: {date}</p>
        <p>Seen at: {location}</p>

      </div>
    </>
  )
}

export default GlobalBird
