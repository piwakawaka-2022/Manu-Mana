import React, { useState } from 'react'
import { Container, Grid, Paper, Button } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

function Pagination ({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / data.limit))
  const [currentPage, setCurrentPage] = useState(1)

  function goToNextPage () {
    if (currentPage <= pageLimit - 1) {
      setCurrentPage((page) => page + 1)
    }
  }

  function goToPreviousPage () {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1)
    }
  }

  function changePage (e) {
    const pageNumber = Number(e.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
  }

  return (
    <>
      <div>
        <Container align='center'>
          <h1 className='title-sightings'>{title}</h1>
          <Grid container style={{ marginBottom: '20px' }}>
            {getPaginatedData().map((d, idx) => <Grid align='center' key={idx} item xs={12} sm={4} md={3}>
              <Paper>
                <RenderComponent key={idx} bird={d} />
              </Paper>
            </Grid>)}
          </Grid>
        </Container>
        <Container align='center'>
          <div className="pagination">
            <Button startIcon={<NavigateBeforeIcon />}
              onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
        PREV
            </Button>

            {getPaginationGroup().map((item, index) => (
              <Button
                key={index}
                onClick={changePage}
                className={`paginationItem ${currentPage === item ? 'active' : null}`}
              >
                <span>{item}</span>
              </Button>
            ))}

            <Button endIcon={<NavigateNextIcon />}
              onClick={goToNextPage}
              className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >NEXT</Button>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Pagination
