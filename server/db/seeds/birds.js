/* eslint-disable comma-dangle */
/* eslint-disable semi */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('birds')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        {
          id: 1,
          name: 'Morepork',
          maori_name: 'Ruru',
          photo: '',
          description:
            'A dark mottled-brown nocturnal owl. Rarely seen in the gardens, but occasionally heard at night making a double hoot or “more pork”.',
        },
        {
          id: 2,
          name: 'Kōkako',
          maori_name: 'Kōkako',
          photo: '',
          description:
            'The North Island Kōkako is an endangered forest bird which is endemic to the North Island of New Zealand. It is grey in colour, with a small black mask. It has blue wattles. Because of its wattle, the bird is sometimes locally called the blue-wattled crow, although it is not a corvid.',
        },
        {
          id: 3,
          name: 'Bellbird',
          maori_name: 'Korimako',
          photo: '',
          description:
            'Named for its liquid bell-like song, which can be distinguished from the tūī by its lack of grunts and wheezes. Like the tūī, it feeds on insects, fruits, nuts and nectar. The male has soft olive-green plumage; the female is brown.',
        },
        {
          id: 4,
          name: 'New Zealand Kingfisher',
          maori_name: 'Kōtare',
          photo: '',
          description:
            'Small green-blue native kingfisher with a long straight bill. Sometimes seen perched on power lines and branches around the Soundshell Lawn. Has distinctive loud “keck, keck, keck” call repeated at length. Diet is small crabs, fresh water crayfish and small fish, as well as insects, lizards, mice and worms.',
        },
        {
          id: 5,
          name: 'Tūī',
          maori_name: 'Tūī',
          photo: '',
          description:
            'Can be seen throughout the gardens, wherever there is fruit or nectar. Feeds on coprosma berries and nectar from pūriri, pōhutukawa, kōwhai, harakeke and eucalyptus. Easily identified by the iridescent metallic-green colour and double white throat-tuft. Song has fluid melodic notes mixed with coughs, clicks, grunts and wheezes.',
        },
        {
          id: 6,
          name: 'New Zealand Wood Pigeon',
          maori_name: 'Kererū',
          photo: '',
          description:
            'Large native pigeon with predominantly white and metallic-green feathers, orange-red bill and red eyes. Has a noisy swish of wings in flight, but is often quiet and still when at rest. Feeds mainly on fruits, and plays a key role in dispersing seeds of large-fruited native trees.',
        },
        {
          id: 7,
          name: '',
          maori_name: '',
          photo: '',
          description: '',
        },
        {
          id: 8,
          name: '',
          maori_name: '',
          photo: '',
          description: '',
        },
        {
          id: 9,
          name: '',
          maori_name: '',
          photo: '',
          description: '',
        },
        {
          id: 10,
          name: '',
          maori_name: '',
          photo: '',
          description: '',
        },
        {
          id: 11,
          name: '',
          maori_name: '',
          photo: '',
          description: '',
        },
        {
          id: 12,
          name: '',
          maori_name: '',
          photo: '',
          description: '',
        },
      ])
    })
}
