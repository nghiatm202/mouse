import React, { useState } from 'react'
import './style.scss'
import { useSelector } from 'react-redux'
import { cartItemsSelector, cartTotalselector } from '../../selectors'
import { formatPrice, roundPrice } from '../../../../utils'
import { removeFromCart, setQuantity } from '../../cartSlice'
import { useDispatch } from 'react-redux'

const CartHasProduct = () => {
  const [count, setCount] = useState(null)

  const dispatch = useDispatch()

  const cartTotal = useSelector(cartTotalselector)
  console.log(cartTotal)
  const cartItems = useSelector(cartItemsSelector)
  console.log(cartItems)

  const handleDecrease = (item) => {
    const action = setQuantity({
      item,
      type: 'decrease',
    })
    dispatch(action)
  }

  const handleIncrease = (item) => {
    const action = setQuantity({
      item,
      type: 'increase',
    })
    dispatch(action)
  }

  const handleOnChange = (e) => {
    setCount(e.target.value)
  }

  const handleDeleteItemInCart = (id) => {
    const action = removeFromCart({
      id,
    })
    dispatch(action)
  }
  return (
    <div className='cart-has-product-wrapper'>
      <div className='cart-product-content'>
        <div className='cart-menu'>
          <div className='cart-brand-name'>
            <h3>Mouse Ecommerce</h3>
            <i className='bx bxs-check-circle'></i>
          </div>
          <div className='cart-title'>
            <span className='unit-price-title'>Đơn giá</span>
            <span className='quantity-title'>Số lượng</span>
            <span className='into-money-title'>Thành tiền</span>
          </div>
        </div>

        {cartItems.map((item) => {
          return (
            <div key={item.data.id} className='cart-wrapper'>
              <div className='cart-content'>
                <img src={item.data.src} alt='mouse' />
                <span className='item-name'>{item.data.productName}</span>
              </div>

              <div className='cart-details'>
                <span className='unit-price'>
                  {formatPrice(item.data.productPrice)}
                </span>

                <div className='quantity-input-wrapper'>
                  <button
                    disabled={item.quantity <= 1}
                    onClick={() => handleDecrease(item)}
                    className='decrease'
                  >
                    <i className='bx bx-minus'></i>
                  </button>
                  <input
                    key={item.data.id}
                    className='quantity-input'
                    type='text'
                    value={item.quantity}
                    onChange={handleOnChange}
                  />
                  <button
                    onClick={() => handleIncrease(item)}
                    className='increase'
                  >
                    <i className='bx bx-plus'></i>
                  </button>

                  <div
                    onClick={() => handleDeleteItemInCart(item.data.id)}
                    className='remove-element'
                  >
                    Xóa
                  </div>
                </div>

                <span className='into-money'>
                  {(
                    roundPrice(item.data.productPrice) * item.quantity
                  ).toLocaleString('vi', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className='payment'>
        <h5>Thanh toán</h5>

        <div className='provisional'>
          <span>Tạm tính</span>
          <span className='provisional-price'>
            {cartTotal.toLocaleString('vi', {
              style: 'currency',
              currency: 'VND',
            })}
          </span>
        </div>

        <div className='into-money'>
          <span>Thành tiền</span>
          <span className='into-money-price'>
            {cartTotal.toLocaleString('vi', {
              style: 'currency',
              currency: 'VND',
            })}
          </span>
        </div>

        <span className='VAT-included'>(Đã bao gồm VAT)</span>

        <div className='payment-btn'>
          <button className='payment-btn-no-login'>
            THAHH TOÁN <br /> <span>Bạn cần đăng nhập để tiếp tục</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartHasProduct
