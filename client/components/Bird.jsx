import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Bird () {
  const birds = useSelector(globalState => globalState.birds)

  const { id } = useParams()

  const birdData = birds.filter(bird => bird.id === Number(id))

  return (
    <>
      <div> <button type="button">Add to sightings </button> </div>
      <div>
        <img src={birdData[0]?.photo} height='300px'/>
        <h1> {birdData[0]?.maori_name} </h1>
        <h2> {birdData[0]?.name} </h2>
        <p> {birdData[0]?.description} </p>
      </div>

    </>
  )
}

export default Bird
