/* eslint-disable camelcase */
import React from 'react'

function Bird (props) {
  const { english_name, maori_name, size, description } = props.bird

  return (
    <>
      <div>
        <h2>{maori_name}</h2>
        <h3>{english_name}</h3>
        <p>{size}</p>
        <p>{description}</p>
      </div>
    </>
  )
}

export default Bird
