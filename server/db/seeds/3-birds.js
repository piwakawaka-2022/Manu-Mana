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
        {
          id: 14,
          name: 'Aotearoa Robin',
          maori_name: 'Toutouwai',
          photo: '/birds/birds/robin.png',
          description:
            'The Aotearoa Robin or Toutouwai is a sparrow-sized bird found only in New Zealand. They are friendly and trusting, often coming to within a couple of metres of people. This species was extinct in the lower North Island until 76 birds were transferred to ZEALANDIA from Kapiti Island in 2001 and 2002. Robins have adapted very well to life here and they are now found throughout the sanctuary. They were even the first species to be transferred out of ZEALANDIA to support a new population on Matiu/Somes Island.',
        },
        {
          id: 15,
          name: 'Pūkeko',
          maori_name: 'Pūkeko',
          photo: '/birds/birds/pukeko.png',
          description:
            'Endearingly reffered to as a swamp hen. Pūkeko feet are big, and they have long toes that are excellent at walking over squishy, muddy ground. When threatened, pūkeko flap their wings and show off their powerful beak. They will stand up for their young and protect the nest from hawks and other predators',
        },
        {
          id: 16,
          name: 'Te Ika-a-Māui (North Island) Brown Kiwi',
          maori_name: 'Te Ika-a-Māui Parauri Kiwi',
          photo: '/birds/birds/brownkiwi.png',
          description:
            'The Kiwi is a unique and curious bird: it cannot fly, has loose, hair-like feathers, strong legs and no tail. New Zealanders have been affectionately called `Kiwis` since the nickname was bestowed by Australian soldiers in the First World War. Today a lot of dedicated people help to prevent Kiwi from becoming extinct. As of 2022, their population was calculated at around 24,550 birds, living in 25 broad clusters. Females weigh in at 2–5kgs, and their male counterparts weigh a bit less at 1.4–3kg. Standing 50 to 65cm tall, it’s no surprise they can’t fly. This is partly also due to their dense bone structure. They have a small claw at the end of each wing, which they may use to fight in defence of their territory if necessary!',
        },
        {
          id: 17,
          name: 'Kākāpō',
          maori_name: 'Kākāpō',
          photo: '/birds/birds/kakapo.png',
          description:
            'The Kākāpō is a large green parrot with a distinctive owl-like face and a waddling gait. They cannot fly, but they climb well. Our most exquisitely perfumed bird, it’s like its feathers have been dipped in a musky array of essential oils that could come straight from a Middle Eastern perfumier. We’re all cheering as it waddles back from the brink of extinction. The kākāpō was even endorsed by Stephen Fry. There are only 199 Kākāpō alive today.',
        },
        {
          id: 18,
          name: 'Takahē',
          maori_name: 'Takahē',
          photo: '/birds/birds/takahe.png',
          description:
            'The flightless Takahē is a unique bird, a conservation icon and a survivor. Takahē have stout red legs and a large, strong red beak. Their feathers range from a dark royal blue head, neck and breast, to peacock blue shoulders, through to shades of iridescent turquoise and olive green on their wings and back. They have wings, but only use them for display during courtship or as a show of aggression. Takahē only breed once a year, raising 1–2 chicks. The Te Ika-a-Māui (North Island) Takahē is unfortunately extinct.',
        },
        {
          id: 19,
          name: 'Blue Duck',
          maori_name: 'Whio',
          photo: '/birds/birds/whio.png',
          description:
            'The iconic Whio is only found in New Zealand. With only 3000 in the wild it faces a risk of becoming extinct. A species that Māori have a strong cultural, spiritual, and historic connection with. Their Māori name is Whio in Te Ika-a-Māui (North Island) or Ko Whio Whio in Te Waipounamu (South Island), which depicts the call of the male bird. They are forever watchful – they will always see you before you see them, and the male will sound the alarm call. Whio are believed to be an ancient species of waterfowl, that appeared at a very early stage in evolutionary history. Their isolation in New Zealand has resulted in unique anatomical and behavioural features. The Whio is a river specialist, and one of the few waterfowl worldwide that live year round on fast-flowing rivers. They are a key indicator of healthy rivers and streams. The more breeding pairs of Whio the healthier the river. Whio may seem tame and unafraid, but to keep them safe you should give them space and watch them from a distance. You can view them up close on the New Zealand $10 note. ',
        },
        {
          id: 20,
          name: 'Aotearoa Fernbird',
          maori_name: 'Mātātā',
          photo: '/birds/birds/matata.png',
          description:
            'Mātātā inhabit wetlands throughout New Zealand. They are a potential indicator of wetland health because they are dependent on the presence of high quality and ecologically diverse habitats and rich food supplies. Mātātā are rarely seen because of their secretive behaviour and excellent camouflage. These secretive birds have disappeared from large areas of New Zealand, and populations continue to decline.',
        },
      ])
    })
}
