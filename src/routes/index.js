import Cart from '../feature/Cart'
import Category from '../feature/Category'
import Checkout from '../feature/Checkout'
import Home from '../feature/Home'
import ProductDetail from '../feature/ProductDetail'
import Search from '../feature/Search'

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/category', component: Category },
  { path: '/productdetail', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
