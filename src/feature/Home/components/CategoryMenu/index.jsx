import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import categoryMenuApi from '../../../../apis/categoryMenuApi'
import './style.scss'

function CategoryMenu(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryMenu = await categoryMenuApi.getAll()
      setData(categoryMenu)
    }

    fetchCategories()
  }, [])

  const settings = {
    className: 'category-menu',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
  }

  return (
    <Slider {...settings}>
      {data.length > 0 &&
        data.map((item) => (
          <Link
            key={item.id}
            href='#'
            to={`/category?brandName=${item.name}`}
          >
            {item.name}
          </Link>
        ))}
    </Slider>
  )
}

export default CategoryMenu
