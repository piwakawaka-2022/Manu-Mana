import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

function BirdSong () {
  return (
    <>
      <div>
        <h1>Mindful Bird Song</h1>
        <p>Stressed out? Can&apos;t go birding today?</p>
        <p>Research shows that listening to melodic birdsong can help people recover from stress and cognitive fatigue.</p>
        <p>So, find a quiet place, close your eyes and listen to a recording of tūī and a chorus of many other birds singing in mixed bush and flowering kōwhai in magical Aotearoa.</p>
      </div>
      <div>
        <ReactAudioPlayer
          src='https://www.doc.govt.nz/globalassets/documents/conservation/native-animals/birds/bird-song/46-tui-morning-chorus.mp3'
          autoPlay = {false}
          controls
        />
      </div>
    </>
  )
}

export default BirdSong
