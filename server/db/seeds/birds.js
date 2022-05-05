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
          photo: '/birds/birds/ruru-morepork.png',
          description:
            'A dark mottled-brown nocturnal owl. Rarely seen in the gardens, but occasionally heard at night making a double hoot or “more pork”.',
        },
        {
          id: 2,
          name: 'Kōkako',
          maori_name: 'Kōkako',
          photo: '/birds/birds/kokako.png',
          description:
            'The Te Ika-a-Māui Kōkako is an endangered forest bird which is endemic to the Te Ika-a-Māui (North-Island) of Aotearoa. It is grey in colour, with a small black mask. It has blue wattles. Because of its wattle, the bird is sometimes locally called the blue-wattled crow, although it is not a corvid.',
        },
        {
          id: 3,
          name: 'Bellbird',
          maori_name: 'Korimako',
          photo: '/birds/birds/korimako-bellbird.png',
          description:
            'Named for its liquid bell-like song, which can be distinguished from the Tūī by its lack of grunts and wheezes. Like the Tūī, it feeds on insects, fruits, nuts and nectar. The male has soft olive-green plumage; the female is brown.',
        },
        {
          id: 4,
          name: 'Aotearoa Kingfisher',
          maori_name: 'Kōtare',
          photo: '/birds/birds/kotare-kingfisher.png',
          description:
            'Small green-blue native Kingfisher with a long straight bill. Sometimes seen perched on power lines and branches around the Soundshell Lawn. Has distinctive loud “keck, keck, keck” call repeated at length. Diet is small crabs, fresh water crayfish and small fish, as well as insects, lizards, mice and worms.',
        },
        {
          id: 5,
          name: 'Tūī',
          maori_name: 'Tūī',
          photo: '/birds/birds/tui.png',
          description:
            'Can be seen throughout the gardens, wherever there is fruit or nectar. Feeds on coprosma berries and nectar from pūriri, pōhutukawa, kōwhai, harakeke and eucalyptus. Easily identified by the iridescent metallic-green colour and double white throat-tuft. Song has fluid melodic notes mixed with coughs, clicks, grunts and wheezes.',
        },
        {
          id: 6,
          name: 'Aotearoa Wood Pigeon',
          maori_name: 'Kererū',
          photo: '/birds/birds/kukupa-kereru.png',
          description:
            'Large native pigeon with predominantly white and metallic-green feathers, orange-red bill and red eyes. Has a noisy swish of wings in flight, but is often quiet and still when at rest. Feeds mainly on fruits, and plays a key role in dispersing seeds of large-fruited native trees.',
        },
        {
          id: 7,
          name: 'Kea',
          maori_name: 'Kea',
          photo: '/birds/birds/kea.png',
          description:
            'The kea is a species of large parrot in the family Nestoridae found in the forested and alpine regions of the Te Waipounamu (South-Island) of Aotearoa. About 48 cm long, it is mostly olive-green with a brilliant orange under its wings and has a large, narrow, curved, grey-brown upper beak.',
        },
        {
          id: 8,
          name: 'Aotearoa Fantail',
          maori_name: 'Pīwakawaka',
          photo: '/birds/birds/piwakawaka-fantail.png',
          description:
            'Abundant native recognisable by its fanned tail and erratic movements as it seizes flying insects. Often seen feeding with silvereyes on the forest remnants. Its two distinctive calls are a penetrating “cheet” and the rhythmical song of the male “tweet-a-tweet-a-tweet”',
        },
        {
          id: 9,
          name: 'Aotearoa Falcon',
          maori_name: 'Karearea',
          photo: '/birds/birds/karearea-nzfalcon.png',
          description:
            'Occasionally seen in the gardens, this brown raptor is endemic to Aotearoa. It flies fast with rapid wing beats, and often perches high in trees. Has been seen swooping down on prey such as rock pigeons',
        },
        {
          id: 10,
          name: 'Kākā',
          maori_name: 'Kākā',
          photo: '/birds/birds/kaka.png',
          description:
            'A large forest parrot often seen in the gardens as a result of successful reintroduction to Zealandia. A rowdy, boisterous bird with calls ranging from whistling to harsh grating. As sap is a part of its diet, Kākā often pries bark off trees with its brush-like tongue.',
        },
        {
          id: 11,
          name: 'Yellowhead',
          maori_name: 'Mohua',
          photo: '/birds/birds/mohua-yellowhead.png',
          description:
            'The Yellowhead or Mōhua is a small insectivorous passerine bird endemic to the Te Waipounamu (South-Island) of Aotearoa. Once a common forest bird, its numbers declined drastically after the introduction of rats and stoats, and it is now endangered.',
        },
        {
          id: 12,
          name: 'Red-crowned Parakeet',
          maori_name: 'Kākāriki',
          photo: '/birds/birds/kakarikikaraka-orangefrontedparakeet.png',
          description:
            'Small native parrot found in the gardens in increasing numbers, thanks to nearby Zealandia. Often heard chattering and cackling in the forest canopy, and occasionally seen feeding cautiously on bush paths. Mostly green with a red blotch above the beak.',
        },
        {
          id: 13,
          name: 'Paradise Shelduck',
          maori_name: 'Pūtangitangi',
          photo: '/birds/birds/pūtangitangi.png',
          description:
            'A large duck sometimes seen near the Duck Pond or Lady Norwood Rose Garden in summer. The female has a white head, the male black. The male makes a deep honking noise',
        },
      ])
    })
}
