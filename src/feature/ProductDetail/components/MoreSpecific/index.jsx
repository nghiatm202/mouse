import React from 'react'
import useFetchProductDetails from '../../../../hooks/useFetchProductDetails'
import './style.scss'

const MoreSpecific = () => {
  const [data] = useFetchProductDetails()

  return (
    <section id='more-specific'>
      {data !== null && (
        <React.Fragment>
          <div className='product-detail-table'>
            <h2>Thông tin chi tiết</h2>
            <table className='detail-table'>
              <tbody>
                <tr>
                  <td>Thương hiệu</td>
                  <td>{data.brandName}</td>
                </tr>
                <tr>
                  <td>Bảo hành</td>
                  <td>{data.warranty}</td>
                </tr>
                <tr>
                  <td>Kiểu kết nối</td>
                  <td>{data.connectionTypes}</td>
                </tr>
                <tr>
                  <td>Màu sắc</td>
                  <td>{data.color}</td>
                </tr>
                <tr>
                  <td>Kết nối</td>
                  <td>{data.connect}</td>
                </tr>
                <tr>
                  <td>Kiểu cầm</td>
                  <td>{data.gripTypes}</td>
                </tr>
                <tr>
                  <td>Số nút bấm</td>
                  <td>{data.mouseButtons}</td>
                </tr>
                <tr>
                  <td>Khối lượng</td>
                  <td>{data.mass}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='product-description'>
            <h2>Mô tả sản phẩm</h2>
            <span>{data.productDescriptions}</span>
          </div>
        </React.Fragment>
      )}
    </section>
  )
}

export default MoreSpecific
