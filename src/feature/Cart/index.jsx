import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import CartHasProduct from './components/CartHasProduct'
import EmptyCartComponent from './components/EmptyCartComponent'
import { useSelector } from 'react-redux'
import { cartItemsCountSelector } from './selectors'

const Cart = () => {
  const cartItemsCount = useSelector(cartItemsCountSelector)
  return (
    <React.Fragment>
      <Breadcrumb liContent='Giỏ hàng' />
      {(cartItemsCount === 0 ? <EmptyCartComponent /> : <CartHasProduct />)}
    </React.Fragment>
  )
}

export default Cart
