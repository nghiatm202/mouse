import React from 'react'
import './style.scss'
import Certification from '../../assets/certification.png'

function Footer(props) {
  return (
    <footer>
      <div className='col'>
        <h4>Hỗ trợ khách hàng</h4>
        <a href='#'>
          Hotline: <strong>1900-0113</strong>
          <br />
          <span>(1000 đ/phút, 8-21h kể cả T7, CN)</span>
        </a>
        <a href='#'>Các câu hỏi thường gặp</a>
        <a href='#'>Gửi yêu cầu hỗ trợ</a>
        <a href='#'>Hướng dẫn đặt hàng</a>
        <a href='#'>Phương thức vận chuyển</a>
        <a href='#'>Chính sách đổi trả</a>
        <a href='#'>Hướng dẫn trả góp</a>
        <a href='#'>Chính sách hàng nhập khẩu</a>
      </div>
      <div className='col'>
        <h4>Về chúng tôi</h4>
        <a href='#'>Giới thiệu</a>
        <a href='#'>Tuyển dụng</a>
        <a href='#'>Chính sách bảo mật thanh toán</a>
        <a href='#'>Chính sách bảo mật thông tin cá nhân</a>
        <a href='#'>Chính sách giải quyết khiếu nại</a>
        <a href='#'>Điều khoản sử dụng</a>
        <a href='#'>Tiếp thị liên kết cùng chúng tôi</a>
        <a href='#'>Bán hàng doanh nghiệp</a>
      </div>

      <div className='col'>
        <h4>Hợp tác và liên kết</h4>
        <a href='#'>Quy chế hoạt động Sàn GDTMĐT</a>
        <a href='#'>Bán hàng cùng chúng tôi</a>
        <div className='certification'>
          <h4>Chứng nhận bởi</h4>
          <a href='#'>
            <img src={Certification} alt='certification' />
          </a>
        </div>
      </div>
      <div className='col'>
        <h4>Phương thức thanh toán</h4>
        <a href='#' className='payment-icon'>
          <i className='bx bx-qr'></i>
          <span>QR Code</span>
        </a>
        <a href='#' className='payment-icon'>
          <i className='bx bx-money'></i>
          <span>Tiền mặt</span>
        </a>
        <a href='#' className='payment-icon'>
          <i className='bx bx-time'></i>
          <span>Trả góp</span>
        </a>
        <a href='#' className='payment-icon'>
          <i className='bx bx-credit-card'></i>
          <span>Internet Banking</span>
        </a>
      </div>
      <div className='copyright'>
        <p>@2022, Trang Thương Mại Điện Tử Siêu Cấp Vip Pro Số 1 Việt Nam</p>
      </div>
    </footer>
  )
}

export default Footer
