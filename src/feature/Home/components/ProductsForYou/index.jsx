import { Tooltip } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../../../components/Pagination'
import StarRating from '../../../../components/StarRating'
import { svgFreeShipping } from '../../../../constants'
import { formatPrice } from '../../../../utils'
import './style.scss'

const ProductsForYou = (props) => {
  const [currentPage, setCurrentPage] = useState(0)
  const { data, isTitle } = props
  const PER_PAGE = 10
  const productListRef = useRef()

  const handlePageClick = ({ selected: selectedPage }) => {
    const productList = productListRef.current
    if (productList) {
      productList.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setCurrentPage(selectedPage)
  }

  const offset = currentPage * PER_PAGE

  const pageCount = Math.ceil(data.length / PER_PAGE)

  return (
    <React.Fragment>
      <section ref={productListRef} id='products-for-you'>
        {isTitle && <h3>Dành cho bạn</h3>}
        <div className='products-for-you-list'>
          {data.length > 0 &&
            data.slice(offset, offset + PER_PAGE).map((item) => (
              <Link
                to={`/productdetail?itemId=${item.id}`}
                key={item.id}
                href='#'
                className='product-for-you-item'
              >
                <img
                  src={item.src}
                  alt={item.productName}
                  className='product-image'
                />
                <Tooltip title={item.productName} placement='bottom'>
                  <span className='product-name'>{item.productName}</span>
                </Tooltip>
                <StarRating
                  value={item.rating}
                  sx={{ paddingTop: 1, color: '#ffce3d', marginLeft: '-2px' }}
                />
                <div className='product-price-wrapper'>
                  <p className='product-price'>
                    {formatPrice(item.productPrice)}
                  </p>
                  {item.productPrice >= 800000 && svgFreeShipping}
                </div>
                {item.promotionalValue > 0 && (
                  <div className='product-price-initial'>
                    <p>{formatPrice(item.productInitialPrice)}</p>
                    <span className='sale-off'>-{item.promotionalValue}%</span>
                  </div>
                )}
              </Link>
            ))}
        </div>
      </section>

      <Pagination onPageChange={handlePageClick} pageCount={pageCount} />
    </React.Fragment>
  )
}

export default ProductsForYou
