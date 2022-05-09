import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

export default function MasonryImageList () {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  const [items, setItems] = useState([])
  const fetchMore = (itemData) => {
    sleep(2000)
    setItems(prevItems => [...prevItems, ...itemData])
  }

  useEffect(() => {
    fetchMore(itemData)
  }, [])

  return (
    <Box id="scrolableDiv" sx={{ width: 800, height: 800, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {items.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

const itemData = [
  {
    img: './birds/ruru-morepork.png',
    title: 'Ruru'
  },
  {
    img: './birds/pukeko.png',
    title: 'Pukeko'
  },
  {
    img: './birds/matata.png',
    title: 'Matata'
  },
  {
    img: './birds/piwakawaka-fantail.png',
    title: 'Piwakawaka'
  },
  {
    img: './birds/robin.png',
    title: 'Toutouwai'
  },
  {
    img: './birds/takahe.png',
    title: 'Takahe'
  },
  {
    img: './birds/tui.png',
    title: 'Tui'
  },
  {
    img: './birds/kea.png',
    title: 'Kea'
  },
  {
    img: './birds/kokako.png',
    title: 'Kokako'
  },
  {
    img: './birds/mohua-yellowhead.png',
    title: 'Mohua'
  },
  {
    img: './birds/kaka.png',
    title: 'Kaka'
  },
  {
    img: './birds/kakapo.png',
    title: 'Kakapo'
  },
  {
    img: './birds/korimako-bellbird.png',
    title: 'Korimako'
  },
  {
    img: './birds/karearea-nzfalcon.png',
    title: 'Karearea'
  },
  {
    img: './birds/brownkiwi.png',
    title: 'Kiwi'
  },
  {
    img: './birds/kakarikikaraka-orangefrontedparakeet.png',
    title: 'Kakarikikaraka'
  },
  {
    img: './birds/pūtangitangi.png',
    title: 'Pūtangitangi'
  },
  {
    img: './birds/kukupa-kereru.png',
    title: 'Kereru'
  },
  {
    img: './birds/ruru-morepork.png',
    title: 'Ruru'
  }
]
