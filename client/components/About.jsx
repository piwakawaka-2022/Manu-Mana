import React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

function About () {
  return (
    <Container align='center' fixed>
      <Box height='100px'></Box>
      <Typography variant='h4' gutterBottom>
        KAITIAKITANGA
      </Typography>
      <Typography gutterBottom>
        MAORI BELIEVE IN AND RECOGNISE THE DEEP KINSHIP BETWEEN HUMANS AND THE NATURAL WORLD. THIS CONNECTION IS EXPRESSED THROUGH KAITIAKITANGA - A WAY OF MANAGING AND PROTECTING THE ENVIRONMENT.
      </Typography>
      <Box height='10px'></Box>
      <Typography variant='h4' gutterBottom>
          KAUPAPA/PURPOSE
      </Typography>
      <Typography gutterBottom>
        MANU MANA IS MORE THAN A WEB APPLICATION: THE PROJECT IS ABOUT DESIGN, PROTECTING TAONGA, RELATIONSHIPS, AND LEARNING IN A DIGITAL AGE. IT IS ALSO AN EXPLORATION OF WHAT IT MEANS TO BE AN ETHICAL TECHNOLOGIST WORKING IN BICULTURAL AOTEAROA.
      </Typography>
      <Box height='10px'></Box>
      <Typography variant='h4' gutterBottom>
          ETHICAL CONSIDERATIONS
      </Typography>
      <Typography gutterBottom>
          MĀORI LANGUAGE AND CULTURAL STORIES ARE TOANGA THAT SHOULD BE TREATED WITH CARE AND CONSIDERATION. FURTHERMORE, MĀORI DATA SOVEREIGNTY, MUST BE CONSIDERED IN AOTEAROA: “NEW ZEALAND IS ONE OF THE FEW COUNTRIES IN THE WORLD THAT HAS ADOPTED A WHOLE-OF-GOVERNMENT APPROACH TO SAFEGUARDING MĀORI CULTURAL HERITAGE. IN 2020, THE WAITANGI TRIBUNAL - A PERMANENT INQUIRY INTO THE TREATMENT OF THE MAORI PEOPLE - ADVISED DATA SHOULD BE INCLUDED IN THIS HERITAGE.” SOURCE: <a href='https://techmonitor.ai/policy/privacy-and-data-protection/maori-data-sovereignty-new-zealand-indigenous'>MĀORI DATA SOVEREIGNTY.
        </a>
      </Typography>
      <Box height='10px'></Box>
      <Typography variant='h4' gutterBottom>
          RESOURCES USED IN MANU MANA
      </Typography>
      <Typography gutterBottom>
        <p>USE OF TE REO MĀORI IN BIODIVERSITY REPORTING AND ASSOCIATED WEB APPLICATIONS:</p>
        <p>USE OF TE REO MĀORI IN BIODIVERSITY REPORTING AND ASSOCIATED WEB APPLICATIONS:</p>
        <p><a href='https://www.jstor.org/stable/26841830'>WEHI, P. M., CARTER, L., HARAWIRA, T. W., FITZGERALD, G., LLOYD, K., WHAANGA, H., &AMP; MACLEOD, C. J. (2019). ENHANCING AWARENESS AND ADOPTION OF CULTURAL VALUES THROUGH USE OF MĀORI BIRD NAMES IN SCIENCE COMMUNICATION AND ENVIRONMENTAL REPORTING. NEW ZEALAND JOURNAL OF ECOLOGY, 43(3), 1-9.</a></p>
        <p>BIRD PHOTOS:</p>
        <p><a href='https://www.birdoftheyear.org.nz/'>FOREST AND BIRD TE REO O TE TAIAO/BIRD OF THE YEAR 2021.</a></p>
        <p>PHYSICAL DESCRIPTIONS OF BIRDS:</p>
        <a href='https://wellingtongardens.nz/assets/documents/5412aa5a11/j008421-botanic-gardens-bird-brochure-web.pdf'>DATA.GOVT.NZ BOTANIC GARDENS BIRD BROCHURE.</a>
        <p>BIRD SONG:</p>
        <p><a href='https://www.nhm.ac.uk/discover/how-listening-to-bird-song-can-transform-our-mental-health.html'>HOW LISTENING TO A BIRDSONG CAN TRANSFORM OUR MENTAL HEALTH.</a></p>
        <p><a href='https://www.doc.govt.nz/nature/native-animals/birds/bird-songs-and-calls/'>DEPARTMENT OF CONSERVATION TE PAPA ATAWHAI. (N.D.). BIRD SONGS AND CALLS.</a></p>
      </Typography>
      <Box height='10px'></Box>
      <Typography variant='h4' gutterBottom>
        AUTHORS
      </Typography>
      <Typography gutterBottom>
        <p><Button variant='link' startIcon={<GitHubIcon />} href="https://github.com/cat-cummings">CAT CUMMINGS - PRODUCT LEAD/SCRUM LEAD</Button></p>
        <p><Button variant='link' startIcon={<GitHubIcon />} href="https://github.com/halmai-mcrae">  HALMAI MCRAE - WELLBEING CHAMPION/BACK END LEAD</Button></p>
        <p><Button variant='link' startIcon={<GitHubIcon />} href="https://github.com/seb-ninness"> SEB NINNESS - EXTERNAL TECHNOLOGIES LEAD</Button></p>
        <p><Button variant='link' startIcon={<GitHubIcon />} href="https://github.com/justine-pepperell"> JUSTINE PEPPERELL - FRONT END FACILITATOR</Button></p>
        <p><Button variant='link' startIcon={<GitHubIcon />} href="https://github.com/jessestratford92"> JESSE STRATFORD - DESIGN LEAD </Button></p>
      </Typography>
      <Box height='100px'></Box>
    </Container>
  )
}

export default About
