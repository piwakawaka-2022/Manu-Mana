/* eslint-disable comma-dangle */
import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function Footer () {
  const [value, setValue] = React.useState(0)

  return (
    <Box sx={{ width: '100%', bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction label="TE KAITIAKITANGA" icon={<FavoriteIcon />} />
        <BottomNavigationAction label=" MANU • MANA " />
        <BottomNavigationAction label="RECENT SIGHTINGS" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  )
}
