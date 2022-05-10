/* eslint-disable comma-dangle */
import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { StyledEngineProvider } from '@mui/material/styles';



export default function Footer () {
  const [value, setValue] = React.useState(0)
 

  return (
    <StyledEngineProvider injectFirst>
      <Box sx={{ width: '100%', bottom: 0, }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction label="TE KAITIAKITANGA" icon={<VolunteerActivismIcon />} />
          <BottomNavigationAction label=" MANU • MANA " icon={<AllInclusiveIcon/> }/>
          <BottomNavigationAction label="RECENT SIGHTINGS" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </StyledEngineProvider>
  )
}
