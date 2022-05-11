/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

function GlobalBird (props) {
  const { name, maori_name, photo, id } = props.bird
  return (
    <div className="global-bird">
      <Link to={`/birds/${id}`}>
        <div className='global-bird-link'>
          <h2>{maori_name.toUpperCase()}</h2>
          <h3>{name.toUpperCase()}</h3>
          <img src={photo} height='100px' />
        </div>
      </Link>
    </div>
  )
}

export default GlobalBird
