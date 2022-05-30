import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import productListApi from '../../apis/productListApi'
import ProductsForYou from '../Home/components/ProductsForYou'

const Category = () => {
  const [data, setData] = useState([])
  const [searchParams] = useSearchParams()

  const brandName = searchParams.get('brandName').toUpperCase()

  useEffect(() => {
    const fetchProductList = async () => {
      const params = { brandName: `${brandName}` }
      const productList = await productListApi.getAll(params)

      const newProductList = productList.map((item) => {
        const { productInitialPrice: initPrice, promotionalValue: promotion } =
          item
        const price = initPrice - initPrice * promotion * 0.01
        return { ...item, productPrice: parseInt(price) }
      })
      setData(newProductList)
    }

    fetchProductList()
  }, [])

  return (
    <React.Fragment>
      <ProductsForYou isTitle={false} data={data} />
    </React.Fragment>
  )
}

export default Category
