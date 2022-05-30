import { createSelector } from '@reduxjs/toolkit'
import { roundPrice } from '../../utils'

export const cartItemsSelector = (state) => state.cart.cartItems

// Count number of products in cart
export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
)

// Calculate total of cart
export const cartTotalselector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce(
      (total, item) =>
        total + roundPrice(item.data.productPrice) * item.quantity,
      0
    )
)
