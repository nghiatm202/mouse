import { Badge } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Login from '../../feature/Authentication/components/Login'
import Register from '../../feature/Authentication/components/Register'
import { cartItemsCountSelector } from '../../feature/Cart/selectors'
import './style.scss'

function Header(props) {
  const [openRegister, setOpenRegister] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const cartItemsCount = useSelector(cartItemsCountSelector)

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClickOpenRegister = () => {
    setOpenRegister(true)
  }

  const handleClickOpenLogin = () => {
    setOpenLogin(true)
  }

  const handleCloseRegister = () => {
    setOpenRegister(false)
  }

  const handleCloseLogin = () => {
    setOpenLogin(false)
  }

  console.log(searchTerm)

  return (
    <section id='header'>
      <Link to='/' className='logo'>
        MOUSE
      </Link>
      <div>
        <input
          type='text'
          placeholder='Nhập từ khóa cần tìm'
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <Link href='#' to={`/search?q=${searchTerm}`}>
          <i className='bx bx-search'></i>
        </Link>
      </div>
      <a href='#' className='menu-icon'>
        <i className='bx bx-purchase-tag-alt'></i>
        <span>Khuyến mãi</span>
      </a>
      <a href='#' className='menu-icon'>
        <i className='bx bx-task'></i>
        <span>Đơn hàng</span>
      </a>
      <a href='#' className='menu-icon'>
        <i className='bx bx-bell'></i>
        <span>Thông báo</span>
      </a>
      <Link to='/cart' className='menu-icon'>
        <Badge badgeContent={cartItemsCount} color='error'>
          <i className='bx bx-cart-alt'></i>
        </Badge>
        <span>Giỏ hàng</span>
      </Link>

      <a onClick={handleClickOpenRegister} href='#' className='menu-icon'>
        <i className='bx bx-registered'></i>
        <span>Đăng ký</span>
      </a>
      <a onClick={handleClickOpenLogin} href='#' className='menu-icon'>
        <i className='bx bx-user-circle'></i>
        <span>Đăng nhập</span>
      </a>

      <Dialog open={openRegister} onClose={handleCloseRegister}>
        <DialogTitle
          sx={{
            textAlign: 'center',
            marginBottom: -2.5,
            fontSize: 24,
          }}
        >
          Đăng ký
        </DialogTitle>
        <DialogContent>
          <Register />
        </DialogContent>
      </Dialog>

      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogTitle
          sx={{
            textAlign: 'center',
            marginBottom: -2.5,
            fontSize: 24,
          }}
        >
          Đăng nhập
        </DialogTitle>
        <DialogContent>
          <Login />
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Header
