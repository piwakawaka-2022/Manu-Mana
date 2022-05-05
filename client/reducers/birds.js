const initialState = [
  {
    id: 1,
    english_name: 'New Zealand Pigeon',
    maori_name: 'Kereru',
    size: '51cm',
    description:
      'Large native pigeon with predominantly white and metallic-green feathers, orange-red bill and red eyes. Has a noisy swish of wings in flight, but is often quiet and still when at rest. Feeds mainly on fruits, and plays a key role in dispersing seeds of large-fruited native trees.',
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
