const initialState = [
  {
    id: 1,
    name: 'New Zealand Pigeon',
    maori_name: 'Kererū',
    size: '51cm',
    description:
      'Large native pigeon with predominantly white and metallic-green feathers, orange-red bill and red eyes. Has a noisy swish of wings in flight, but is often quiet and still when at rest. Feeds mainly on fruits, and plays a key role in dispersing seeds of large-fruited native trees.',
    photo:
      'https://www.visitzealandia.com/portals/0/Images/Birds/Kereru-Brendon-Doran.jpg',
    date: '1/5/2022',
    location: 'Karori Park left corner',
  },
  {
    id: 2,
    name: 'Bellbird',
    maori_name: 'Korimako',
    size: '20cm',
    description:
      'Named for its liquid bell-like song, which can be distinguished from the tūī by its lack of grunts and wheezes. Like the tūī, it feeds on insects, fruits, nuts and nectar. The male has soft olive-green plumage; the female is brown',
    photo:
      'https://www.doc.govt.nz/thumbs/hero/contentassets/a9df6771b0394be39a12138a802ae8fa/bellbird-s-evans-1920-2.jpg',
    date: '3/5/2022',
    location: 'Volga Street, Island Bay',
  },
  {
    id: 3,
    name: 'Red-Crowned Parakeet',
    maori_name: 'Kākāriki',
    size: '28cm',
    description:
      'Small native parrot found in the gardens in increasing numbers, thanks to nearby Zealandia. Often heard chattering and cackling in the forest canopy, and occasionally seen feeding cautiously on bush paths. Mostly green with a red blotch above the beak.',
    photo:
      'https://theparrotplace.co.nz/wp-content/uploads/2011/03/kakiriki.jpg',
    date: '5/5/2022',
    location: 'Outside Zealandia main entrance',
  },
]

const birds = (state = initialState, action) => {
  switch (action.type) {
    // case GET_BIRD_SIGHTINGS:
    //   return initialState

    default:
      return state
  }
}

export default birds
