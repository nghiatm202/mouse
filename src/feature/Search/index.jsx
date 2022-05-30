import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import productListApi from '../../apis/productListApi'
import Breadcrumb from '../../components/Breadcrumb'
import ProductsForYou from '../Home/components/ProductsForYou'

const Search = () => {
  const [data, setData] = useState([])
  const [searchParams] = useSearchParams()

  const q = searchParams.get('q')

  useEffect(() => {
    const fetchProductList = async () => {
      const params = { q: `${q}` }
      console.log(params)
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

  console.log(data)

  return (
    <React.Fragment>
      <Breadcrumb searchContent={q} />
      <ProductsForYou isTitle={false} data={data} />
    </React.Fragment>
  )
}

export default Search
