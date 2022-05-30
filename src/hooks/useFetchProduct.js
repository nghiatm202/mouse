import { useEffect, useState } from 'react'
import productListApi from '../apis/productListApi'

const useFetchProduct = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchProductList = async () => {
      const productList = await productListApi.getAll()
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

  return [data]
}

export default useFetchProduct
