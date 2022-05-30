import React from 'react'
import './style.scss'

const Breadcrumb = (props) => {
  const { searchContent, liContent } = props

  return (
    <section id='breadcrumb'>
      <ul className='breadcrumb'>
        <li>
          <a href='#'>Trang chủ</a>
        </li>
        <li>{liContent || 'Tìm kiếm:'}</li>
        <span className='search-content'>{searchContent}</span>
      </ul>
    </section>
  )
}

export default Breadcrumb
