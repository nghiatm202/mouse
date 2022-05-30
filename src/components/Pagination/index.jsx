import React from 'react'
import ReactPaginate from 'react-paginate'
import './style.scss'

const Pagination = ({ onPageChange, pageCount }) => {
  return (
    <ReactPaginate
      nextLabel='➡'
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel='⬅'
      pageLinkClassName='page-link'
      previousLinkClassName='page-link'
      nextLinkClassName='page-link'
      breakLabel='…'
      breakLinkClassName='page-link'
      containerClassName='pagination'
      disabledLinkClassName='page-link page-disabled'
      activeLinkClassName='active'
      renderOnZeroPageCount={null}
      onPageChange={onPageChange}
    />
  )
}

export default Pagination
