import React, { useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import StarRating from '../../../../components/StarRating'
import { svgFreeShipping } from '../../../../constants'
import useFetchProductDetails from '../../../../hooks/useFetchProductDetails'
import { formatPrice } from '../../../../utils'
import { useDispatch } from 'react-redux'
import './style.scss'
import { addToCart } from '../../../Cart/cartSlice'

const ProductDetails = () => {
  const [count, setCount] = useState(1)
  const [src, setSrc] = useState('')

  const [data] = useFetchProductDetails()
  const dispatch = useDispatch()

  useEffect(() => {
    const MainImg = document.getElementById('MainImg')
    const smallImg = [...document.getElementsByClassName('small-img')]

    smallImg.forEach((item) => {
      item.addEventListener('click', () => {
        MainImg.src = item.src
        setSrc(MainImg.src)
      })
    })
  })

  const handleDecrease = () => {
    setCount((prevCount) => {
      if (prevCount <= 1) {
        return (prevCount = 1)
      } else {
        return prevCount - 1
      }
    })
  }

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleOnChange = (e) => {
    setCount(e.target.value)
  }

  const handleAddToCartSubmit = () => {
    const action = addToCart({
      id: data.id,
      data,
      quantity: count,
    })
    console.log(action)
    dispatch(action)
  }

  return (
    <section id='product-details'>
      {data !== null && (
        <React.Fragment>
          <div className='single-product-img'>
            <Zoom zoomMargin={220} scrollableEl={false}>
              <img
                src={src || data.smallImgCol_1}
                width='100%'
                id='MainImg'
                alt={data.productName}
              />
            </Zoom>

            <div className='small-img-group'>
              <div className='small-img-column'>
                <img
                  src={data.smallImgCol_1}
                  width='100%'
                  className='small-img'
                  alt={data.productName}
                />
              </div>
              <div className='small-img-column'>
                <img
                  src={data.smallImgCol_2}
                  width='100%'
                  className='small-img'
                  alt={data.productName}
                />
              </div>
              <div className='small-img-column'>
                <img
                  src={data.smallImgCol_3}
                  width='100%'
                  className='small-img'
                  alt={data.productName}
                />
              </div>
              <div className='small-img-column'>
                <img
                  src={data.smallImgCol_4}
                  width='100%'
                  className='small-img'
                  alt={data.productName}
                />
              </div>
            </div>
          </div>

          <div className='single-product-details'>
            <h4>{data.productName}</h4>
            <div className='below-title'>
              <StarRating
                value={data.rating}
                sx={{ color: '#ffce3d', fontSize: '22px', marginTop: '-3px' }}
              />
              <div className='quantity_sold'>
                ???? b??n <span>{data.productsSold}</span>
              </div>
            </div>
            <h2>{formatPrice(data.productPrice)}</h2>
            {data.promotionalValue > 0 && (
              <p className='old-price'>
                {formatPrice(data.productInitialPrice)}
              </p>
            )}

            <div className='amount-wrapper'>
              <span>S??? l?????ng:</span>
              <button onClick={handleDecrease} className='decrease'>
                <i className='bx bx-minus'></i>
              </button>
              <input
                className='quantity-input'
                type='text'
                value={count}
                onChange={handleOnChange}
              />
              <button onClick={handleIncrease} className='increase'>
                <i className='bx bx-plus'></i>
              </button>
              <div className='remaining-products'>
                Ch??? c??n {data.productsLeft} s???n ph???m
              </div>
            </div>

            <div>
              <button
                onClick={handleAddToCartSubmit}
                className='add-to-cart-button'
              >
                <i className='bx bxs-cart-add'></i> Th??m v??o gi??? h??ng
              </button>
              <button className='buy-now-button'>Mua ngay</button>
            </div>
            {/* em ch??? m???i l??m logic ??? n??t th??m v??o gi??? h??ng ??, ch??a l??m mua na */}

            <div className='guarantee'>
              <span>
                <i className='bx bx-check-shield'></i>
                Ch??ng t??i ?????m b???o
              </span>

              <p>3 ng??y tr??? h??ng / ho??n ti???n</p>
            </div>
          </div>
        </React.Fragment>
      )}

      <div className='product-notes'>
        <div className='free-shipping'>
          {svgFreeShipping}
          <span>S???n ph???m ???????c mi???n ph?? giao h??ng</span>
        </div>

        <div className='policy'>
          <h2>Ch??nh s??ch b??n h??ng</h2>
          <div className='policy-list'>
            <div className='policy-item'>
              <i className='bx bxs-bus'></i>
              <span>Mi???n ph?? giao h??ng cho ????n h??ng t??? 800K</span>
            </div>
            <div className='policy-item'>
              <i className='bx bx-check-shield'></i>
              <span>Cam k???t h??ng ch??nh h??ng 100%</span>
            </div>
            <div className='policy-item'>
              <i className='bx bx-package'></i>
              <span>?????i tr??? trong v??ng 10 ng??y</span>
            </div>
          </div>
        </div>

        <div className='other-service'>
          <h2>D???ch v??? kh??c</h2>
          <div className='other-service-list'>
            <div className='other-service-item'>
              <i className='bx bx-cog'></i>
              <span>S???a ch???a ?????ng gi?? 150.000??</span>
            </div>
            <div className='other-service-item'>
              <i className='bx bx-laptop'></i>
              <span>V??? sinh m??y t??nh, laptop</span>
            </div>
            <div className='other-service-item'>
              <i className='bx bx-check-shield'></i>
              <span>B???o h??nh t???i nh??</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
