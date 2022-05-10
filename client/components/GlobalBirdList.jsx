
import { Container, Grid, Paper} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

import GlobalBird from './GlobalBird'

function GlobalBirdList () {
  const birds = useSelector(globalState => globalState.birds)

  return (
    <> 
    
    <Container align='center'>
      <Grid container style={{ marginBottom: `20px`}}>
        {birds.map((oneBird) =><Grid align='center' key={oneBird?.id} item xs={12} sm={4} md={3}>
                                  <Paper>
                                    <GlobalBird bird={oneBird} />
                                  </Paper>
                                </Grid> )}       
      </Grid>
    </Container>
    </>
  )
}

export default GlobalBirdList
