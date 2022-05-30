import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import productListApi from '../apis/productListApi'

const useFetchProductDetails = () => {
  const [data, setData] = useState(null)
  const [searchParams] = useSearchParams()

  const itemId = searchParams.get('itemId')

  useEffect(() => {
    const fetchProductList = async () => {
      const productList = await productListApi.get(itemId)

      const { productInitialPrice: initPrice, promotionalValue: promotion } =
        productList
      const price = initPrice - initPrice * promotion * 0.01
      productList.productPrice = parseInt(price)

      setData(productList)
    }

    fetchProductList()
  }, [])

  return [data]
}

export default useFetchProductDetails
