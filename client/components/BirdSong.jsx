import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Container, Typography, Box } from '@mui/material'

function BirdSong () {
  return (
    <>
      <Box height='100px'></Box>
      <Container align='center'>
        <Typography variant='h4' gutterBottom>
          MINDFUL BIRD SONG
        </Typography>
        <Box height='70px'></Box>
        <Container align='center'>
          <ReactAudioPlayer
            src='https://www.doc.govt.nz/globalassets/documents/conservation/native-animals/birds/bird-song/46-tui-morning-chorus.mp3'
            autoPlay = {false}
            controls
          />
          <Box height='70px'></Box>
        </Container>
        <p>STRESSED OUT? CAN&apos;T GO BIRDING TODAY?</p>
        <p>RESEARCH SHOWS THAT LISTENING TO MELODIC BIRDSONG CAN HELP PEOPLE RECOVER FROM STRESS AND COGNITIVE FATIGUE.</p>
        <p>SO, FIND A QUIET PLACE, CLOSE YOUR EYES AND LISTEN TO A RECORDING OF TŪĪ AND A CHORUS OF MANY OTHER BIRDS SINGING IN MIXED BUSH AND FLOWERING KŌWHAI IN MAGICAL AOTEAROA.</p>
      </Container>
      <Box height='150px'></Box>
    </>
  )
}

export default BirdSong
