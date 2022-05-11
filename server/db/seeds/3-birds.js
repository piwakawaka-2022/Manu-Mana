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
          photo: '/birds/ruru-morepork.png',
          description:
            'A dark mottled-brown nocturnal owl. Rarely seen in the gardens, but occasionally heard at night making a double hoot or “more pork”. Ruru are widely distributed throughout the native and exotic forests of New Zealand. They are uncommon in the drier eastern regions of Te Waipounamu (South-Island), especially south of Christchurch. They also occur in more open areas where suitable patches of vegetation remain including sparsely-wooded farmland, and within some urban parks and gardens.',
          meaning:
            'Aotearoa’s native owl has large, staring eyes and a mournful cry. Their haunting cry and watchful nature are linked with tapu (spiritual restriction). They are symbolic of guardianship, forewarning, grief and awareness for Māori. “Are you taking enough care for yourself and your whānau and your provider, Papatūānuku (Earth Mother).”',
        },
        {
          id: 2,
          name: 'Kōkako',
          maori_name: 'Kōkako',
          photo: '/birds/kokako.png',
          description:
            'The Te Ika-a-Māui Kōkako is an endangered forest bird which is endemic to the Te Ika-a-Māui (North-Island) of Aotearoa. It is grey in colour, with a small black mask. It has blue wattles. Because of its wattle, the bird is sometimes locally called the blue-wattled crow, although it is not a corvid. The Kōkako appears on the reverse side of the NZ $50 note.',
          meaning:
            'In Māori myth, the Kōkako filled its wattles with water and brought it to Maui as he fought the sun. Maui rewarded the bird by making its legs long and slender, enabling it to bound through the forest with ease.',
        },
        {
          id: 3,
          name: 'Bellbird',
          maori_name: 'Korimako',
          photo: '/birds/korimako-bellbird.png',
          description:
            'Named for its liquid bell-like song, which can be distinguished from the Tūī by its lack of grunts and wheezes. Like the Tūī, it feeds on insects, fruits, nuts and nectar. The male has soft olive-green plumage; the female is brown.',
          meaning:
            'The Māori saying “he rite ki te kopara e ko nei te ata”, means “like a bellbird pealing at daybreak” – a way of complimenting a great speaker or singer.',
        },
        {
          id: 4,
          name: 'Aotearoa Kingfisher',
          maori_name: 'Kōtare',
          photo: '/birds/kotare-kingfisher.png',
          description:
            'Small green-blue native Kōtare with a long straight bill. Sometimes seen perched on power lines and branches around the Soundshell Lawn. Has distinctive loud “keck, keck, keck” call repeated at length. Diet is small crabs, fresh water crayfish and small fish, as well as insects, lizards, mice and worms.',
          meaning:
            'The word Kōtare sometimes referred to the elevated platform in a pā, used to watch for enemies. The bird perches motionless then attacks its prey from out of nowhere. The Kōtare knows what to do and when to act, it is patient and alert to subtle changes in the environment. “Be aware, sit still and only at the perfect moment your inner instinct will know when to take precise action.”',
        },
        {
          id: 5,
          name: 'Tūī',
          maori_name: 'Tūī',
          photo: '/birds/tui.png',
          description:
            'Can be seen throughout the gardens, wherever there is fruit or nectar. Feeds on coprosma berries and nectar from pūriri, pōhutukawa, kōwhai, harakeke and eucalyptus. Easily identified by the iridescent metallic-green colour and double white throat-tuft. Song has fluid melodic notes mixed with coughs, clicks, grunts and wheezes.',
          meaning:
            'Tūī imitates the songs of other birds and even people. These birds were sometimes tamed and taught mihi (greetings), which they would recite when visitors arrived. Everyone knows the beautiful song of the Tūī and if you watch them closely you will see they have no problem flying in and interrupting other birds with their abrupt entrances. “Everywhere you are you belong, speak up, what you have to say is important.”',
        },
        {
          id: 6,
          name: 'Aotearoa Wood Pigeon',
          maori_name: 'Kererū',
          photo: '/birds/kukupa-kereru.png',
          description:
            'Large native pigeon with predominantly white and metallic-green feathers, orange-red bill and red eyes. Has a noisy swish of wings in flight, but is often quiet and still when at rest. Feeds mainly on fruits, and plays a key role in dispersing seeds of large-fruited native trees.',
          meaning:
            'The Kererū’s colourful feathers were used to make cloaks. They were used as a staple food source for Māori and their feathers were also used to preserve food. We often see them eating berries alone in the bush, or balancing precariously on the thin branch of a kōwhai tree, but when we see these big clumsy birds in flocks it is quite a sight to be seen as their big wings plow their way through the trees. Abundance and wealth are on the cards when we see this majestic bird. “May you be flooded with all the abundance your heart desires.”',
        },
        {
          id: 7,
          name: 'Kea',
          maori_name: 'Kea',
          photo: '/birds/kea.png',
          description:
            'The Kea is a species of large parrot in the family Nestoridae found in the forested and alpine regions of the Te Waipounamu (South-Island) of Aotearoa. About 48 cm long, it is mostly olive-green with a brilliant orange under its wings and has a large, narrow, curved, grey-brown upper beak.',
          meaning:
            'The name of this mountain parrot sounds like its call – ‘keee aaa’. Many bird names were named after how they sound. These birds are very clever and cheeky. They are attracted to anything gleaming. In some Māori traditions they were seen as guardians, which is ironic as they steal your shiny stuff. “Where are you getting distracted in life by the material influence, where is the trickery of your mind taking you away from the basic joy of your inner child?’’',
        },
        {
          id: 8,
          name: 'Aotearoa Fantail',
          maori_name: 'Pīwakawaka',
          photo: '/birds/piwakawaka-fantail.png',
          description:
            'Abundant native bird recognisable by its fanned tail and erratic movements as it seizes flying insects. Often seen feeding with silvereyes on the forest remnants. Its two distinctive calls are a penetrating “cheet” and the rhythmical song of the male “tweet-a-tweet-a-tweet”',
          meaning:
            'The Pīwakawaka has many different Māori names. In one Māori tradition, it was the Pīwakawaka that caused Māui’s death, so it is known as a harbinger of death when seen inside a house. A fidgety person is described as a fantail’s tail, because of the bird’s restless movements. “Ready for change? A part of you is ready to end and a new experience ready to come forth.”',
        },
        {
          id: 9,
          name: 'Aotearoa Falcon',
          maori_name: 'Karearea',
          photo: '/birds/karearea-nzfalcon.png',
          description:
            'Occasionally seen in the gardens, this brown raptor is endemic to Aotearoa. It flies fast with rapid wing beats, and often perches high in trees. Has been seen swooping down on prey such as rock pigeons',
          meaning:
            'Warriors who wore the head plume of the Kārearea were asserting that they were as fierce and reckless as the falcon. As those that have entered a falcon nest can attest – this would have been a warrior to avoid!',
        },
        {
          id: 10,
          name: 'Kākā',
          maori_name: 'Kākā',
          photo: '/birds/kaka.png',
          description:
            'A large forest parrot often seen in the gardens as a result of successful reintroduction to Zealandia. A rowdy, boisterous bird with calls ranging from whistling to harsh grating. As sap is a part of its diet, Kākā often pries bark off trees with its brush-like tongue.',
          meaning:
            'Once common throughout Aotearoa, our native parrot the Kākā is now found in limited numbers in a few forests in the central Te Ika-a-Māui (North-Island) and Te Wai Pounamu (South Island). From stories of our Māori ancestors and those lucky enough to be close to the Kākā in recent times, we know that they are restless birds and one can hear their calls throughout the night. Any sign of dawn is noted by the brown and red parrot, who is awake and awaiting it. Its harsh cry will surely ring out through the realm of Tāne (the god of the forest). One can say "Kua tangi to Kākā" (the Kākā has cried) and know that Hine-ata, the Morning Maid, is at hand.',
        },
        {
          id: 11,
          name: 'Yellowhead',
          maori_name: 'Mohua',
          photo: '/birds/mohua-yellowhead.png',
          description:
            'The Yellowhead or Mōhua is a small insectivorous passerine bird endemic to the Te Waipounamu (South-Island) of Aotearoa. Once a common forest bird, its numbers declined drastically after the introduction of rats and stoats, and it is now endangered.',
          meaning:
            'Taonga species are native birds, plants and animals of special cultural significance and importance to Māori. Mōhua are taonga species to Ngāi Tahu, an iwi that’s ancestral land covers most of Te Wai Pounamu (South Island) – excluding a northern segment – and the islands to the south including Stewart Island/ Rakiura and other islands.',
        },
        {
          id: 12,
          name: 'Red-crowned Parakeet',
          maori_name: 'Kākāriki',
          photo: '/birds/kakarikikaraka-orangefrontedparakeet.png',
          description:
            'Small native parrot found in the gardens in increasing numbers, thanks to nearby Zealandia. Often heard chattering and cackling in the forest canopy, and occasionally seen feeding cautiously on bush paths. Mostly green with a red blotch above the beak.',
          meaning:
            'The following recital is said to have been repeated by a warrior when he was dressing and decorating his hair with Kākāriki feathers prior to entering a fight "Te kakariki nei homai aku kura. Ehara, waiho ano aku kura hei kura kaia maku ki tawhiti, torete kai."',
        },
        {
          id: 13,
          name: 'Paradise Shelduck',
          maori_name: 'Pūtangitangi',
          photo: '/birds/pūtangitangi.png',
          description:
            'A large duck sometimes seen near the Duck Pond or Lady Norwood Rose Garden in summer. The female has a white head, the male black. The male makes a deep honking noise',
          meaning:
            'Pūtangitangi were important food for Māori. The birds were caught during the moult, while plump and unable to fly, and then preserved in their own fat. Many were sent to Wellington and sold to European settlers. Settlers hunted paradise shelducks almost to extinction – they survived only in the south. Their numbers recovered with hunting controls and translocations, reaching 120,000 by 1981.',
        },
        {
          id: 14,
          name: 'Aotearoa Robin',
          maori_name: 'Toutouwai',
          photo: '/birds/robin.png',
          description:
            'The Aotearoa Robin or Toutouwai is a sparrow-sized bird found only in New Zealand. They are friendly and trusting, often coming to within a couple of metres of people. This species was extinct in the lower North Island until 76 birds were transferred to Zealandia from Kapiti Island in early 2002. Robins have adapted very well to life here and they are now found throughout the sanctuary. They were even the first species to be transferred out of Zealandia to support a new population on Matiu/Somes Island.',
          meaning:
            'In Māori myth the Toutouwai, along with the Kōkako, were Maui’s assisters in his efforts to tame the sun (unlike the rebellious Tīeke!) and as a reward for fetching him water, he daubed their forehead with a sacred ma (white) stripe. ',
        },
        {
          id: 15,
          name: 'Pūkeko',
          maori_name: 'Pūkeko',
          photo: '/birds/pukeko.png',
          description:
            'Endearingly reffered to as a swamp hen. Pūkeko feet are big, and they have long toes that are excellent at walking over squishy, muddy ground. When threatened, pūkeko flap their wings and show off their powerful beak. They will stand up for their young and protect the nest from hawks and other predators',
          meaning:
            'The colour red was associated with nobility and power by Māori so the Pūkeko was held in high esteem because of its red beak and legs. Pūkeko are known for their bold scheming and determination. In times past they raided gardens for kūmara (sweet potato) and taro. A stubborn, annoying person was compared metaphorically to the bird, and was said to have Pūkeko ears (taringa Pākura). They are known to steal eggs from each other and this is an indication of their character.',
        },
        {
          id: 16,
          name: 'Kiwi',
          maori_name: 'Te Ika-a-Māui Parauri Kiwi',
          photo: '/birds/brownkiwi.png',
          description:
            'The Kiwi is a unique and curious bird: it cannot fly, has loose, hair-like feathers, strong legs and no tail. New Zealanders have been affectionately called `Kiwis` since the nickname was bestowed by Australian soldiers in the First World War. Today a lot of dedicated people help to prevent Kiwi from becoming extinct. As of 2022, their population was calculated at around 24,550 birds, living in 25 broad clusters. Females weigh in at 2–5kgs, and their male counterparts weigh a bit less at 1.4–3kg. Standing 50 to 65cm tall, it’s no surprise they can’t fly. This is partly also due to their dense bone structure. They have a small claw at the end of each wing, which they may use to fight in defence of their territory if necessary!',
          meaning:
            'Our national treasure, the Kiwi, is known as the hidden bird of Tāne (god of the forest). The Kiwi is taonga (treasure) to Māori, who have strong cultural and spiritual associations with it. Its feathers were used for weaving into cloaks for the high ranks. These barely seen birds seem to not really do a lot, they don’t even fly, which is why they are so vulnerable in their natural habitat. “There is no need to gain respect through force, you are worthy just as you are. Sometimes the power is in the silence.”',
        },
        {
          id: 17,
          name: 'Kākāpō',
          maori_name: 'Kākāpō',
          photo: '/birds/kakapo.png',
          description:
            'The Kākāpō is a large green parrot with a distinctive owl-like face and a waddling gait. They cannot fly, but they climb well. Our most exquisitely perfumed bird, it’s like its feathers have been dipped in a musky array of essential oils that could come straight from a Middle Eastern perfumier. We’re all cheering as it waddles back from the brink of extinction. The kākāpō was even endorsed by Stephen Fry. There are only 199 Kākāpō alive today.',
          meaning:
            'Like many other bird species in Aotearoa, the KāKāpō was historically important to the Māori, the indigenous people of New Zealand, appearing in many of their traditional legends and folklore. It was hunted and used as a resource by Māori, both for its meat as a food source and for its feathers, which were used to make highly valued pieces of clothing. It was also sometimes kept as a pet.',
        },
        {
          id: 18,
          name: 'Takahē',
          maori_name: 'Takahē',
          photo: '/birds/takahe.png',
          description:
            'The flightless Takahē is a unique bird, a conservation icon and a survivor. Takahē have stout red legs and a large, strong red beak. Their feathers range from a dark royal blue head, neck and breast, to peacock blue shoulders, through to shades of iridescent turquoise and olive green on their wings and back. They have wings, but only use them for display during courtship or as a show of aggression. Takahē only breed once a year, raising 1–2 chicks. The Te Ika-a-Māui (North Island) Takahē is unfortunately extinct.',
          meaning:
            'Takahē have special cultural, spiritual and traditional significance to Ngāi Tahu, the iwi (Māori tribe) of most of New Zealand’s South Island. Ngāi Tahu value Takahē as a taonga (treasure) and they continue to act as kaitiaki (guardians) of the Takahē by working with DOC to protect this precious species.',
        },
        {
          id: 19,
          name: 'Blue Duck',
          maori_name: 'Whio',
          photo: '/birds/whio.png',
          description:
            'The iconic Whio is only found in New Zealand. With only 3000 in the wild it faces a risk of becoming extinct. They are forever watchful – they will always see you before you see them, and the male will sound the alarm call. Whio are believed to be an ancient species of waterfowl, that appeared at a very early stage in evolutionary history. Their isolation in New Zealand has resulted in unique anatomical and behavioural features. The Whio is a river specialist, and one of the few waterfowl worldwide that live year round on fast-flowing rivers. They are a key indicator of healthy rivers and streams. The more breeding pairs of Whio the healthier the river. Whio may seem tame and unafraid, but to keep them safe you should give them space and watch them from a distance. You can view them up close on the New Zealand $10 note. ',
          meaning:
            'A species that Māori have a strong cultural, spiritual, and historic connection with. Their Māori name is Whio in Te Ika-a-Māui (North Island) or Ko Whio Whio in Te Waipounamu (South Island), which depicts the call of the male bird. Whio are an important part of fast-flowing river ecosystems. Māori understood the importance of them and saw Whio as a sign of river health. Whio are an ‘indicator species’ (their presence indicates a river is very healthy). You can tell what is going on with a river – its water quality, insect life, and structure, from the number of Whio found there. ',
        },
        {
          id: 20,
          name: 'Aotearoa Fernbird',
          maori_name: 'Mātātā',
          photo: 'birds/matata.png',
          description:
            'Mātātā inhabit wetlands throughout New Zealand. They are a potential indicator of wetland health because they are dependent on the presence of high quality and ecologically diverse habitats and rich food supplies. Mātātā are rarely seen because of their secretive behaviour and excellent camouflage. These secretive birds have disappeared from large areas of New Zealand, and populations continue to decline.',
          meaning:
            'To some iwi, the Mātātā is tapu (sacred). When a Chief died and was buried, men would catch a Mātātā from a swamp. The bird was used in a ceremony to help lead the dead man’s spirit to the legendary Polynesian homeland of Hawaiki.',
        },
      ])
    })
}
