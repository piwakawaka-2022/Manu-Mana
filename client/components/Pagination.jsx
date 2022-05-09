import React, { useState } from 'react'

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
        <h1>{title}</h1>
        {/* show the posts, 10 posts at a time */}
        <div className="dataContainer">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} bird={d} />
          ))}
        </div>

        {/* show the pagiantion
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
        <div className="pagination">
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          >
        prev
          </button>

          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${currentPage === item ? 'active' : null}`}
            >
              <span>{item}</span>
            </button>
          ))}

          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? 'disabled' : ''}`}
          >
        next
          </button>
        </div>
      </div>
    </>
  )
}

export default Pagination
