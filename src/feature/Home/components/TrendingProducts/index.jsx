import { Tooltip } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { svgFreeShipping } from '../../../../constants'
import useFetchProduct from '../../../../hooks/useFetchProduct'
import { formatPrice } from '../../../../utils'
import './style.scss'

function TrendingProducts(props) {
  const [data] = useFetchProduct()

  const settings = {
    className: 'trending-products-list',
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  }

  return (
    <section id='trending-products'>
      <h3>Bán chạy trong tháng</h3>

      {data.length > 0 && (
        <Slider {...settings}>
          {data.map(
            (item) =>
              item.isTrending && (
                <Link
                  to={`/productdetail?itemId=${item.id}`}
                  key={item.id}
                  href='#'
                  className='trending-product-item'
                >
                  <img
                    src={item.src}
                    alt={item.productName}
                    className='product-image'
                  />
                  <Tooltip title={item.productName} placement='bottom'>
                    <span className='product-name'>{item.productName}</span>
                  </Tooltip>

                  <div className='product-price-wrapper'>
                    <p className='product-price'>
                      {formatPrice(item.productPrice)}
                    </p>
                    {item.productPrice >= 800000 && svgFreeShipping}
                  </div>
                  {item.promotionalValue > 0 && (
                    <div className='product-price-initial'>
                      <p>{formatPrice(item.productInitialPrice)}</p>
                      <span className='sale-off'>
                        -{item.promotionalValue}%
                      </span>
                    </div>
                  )}
                </Link>
              )
          )}
        </Slider>
      )}
    </section>
  )
}

export default TrendingProducts
