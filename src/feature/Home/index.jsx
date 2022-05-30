import React, { useEffect } from 'react'
import useFetchProduct from '../../hooks/useFetchProduct'
import CarouselBanners from './components/CarouselBanners'
import CategoryMenu from './components/CategoryMenu'
import ProductsForYou from './components/ProductsForYou'
import TrendingProducts from './components/TrendingProducts'

const Home = () => {
  const [data] = useFetchProduct()

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <React.Fragment>
      <CategoryMenu />
      <CarouselBanners />
      <TrendingProducts />
      <ProductsForYou isTitle data={data} />
    </React.Fragment>
  )
}

export default Home
