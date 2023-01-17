const { createSlice } = require('@reduxjs/toolkit')

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true
    },

    hideMiniCart(state) {
      state.showMiniCart = false
    },

    addToCart(state, action) {
      // newItem = {id, product, quantity}
      const newItem = action.payload
      const index = state.cartItems.findIndex((x) => x.id === newItem.id)
      if (index !== -1) {
        // increase quantity
        state.cartItems[index].quantity += newItem.quantity
      } else {
        // add to cart
        state.cartItems.push(newItem)
      }
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload.item
      const { type } = action.payload
      // check if product is available in cart
      const index = state.cartItems.findIndex((x) => x.id === id)
      if (index >= 0) {
        if (type === 'increase') {
          state.cartItems[index].quantity = quantity + 1
        }
        if (type === 'decrease' && state.cartItems[index].quantity > 1) {
          state.cartItems[index].quantity = quantity - 1
        }
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload.id
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove)
    },
  },
})

const { actions, reducer } = cartSlice
console.log(reducer)
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
} = actions // named export
export default reducer // default export
