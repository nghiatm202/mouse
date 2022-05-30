import React, { useEffect } from 'react'
import MoreSpecific from './components/MoreSpecific'
import ProductDetails from './components/ProductDetails'

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <React.Fragment>
      <ProductDetails />
      <MoreSpecific />
    </React.Fragment>
  )
}

export default ProductDetail
