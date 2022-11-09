import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Header,Footer} from './layouts/layouts'
import { HomePage, AboutUs, Account, Blog, Buy, ContactUs, Faq, NotFound, OrderCompleted, Products, SearchProducts, Shop, ShopingCart, SingleBlog, SingleProduct } from './pages/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './sass/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/account' element={<Account />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blogs/blog' element={<SingleBlog />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id/:product' element={<SingleProduct />} />
        <Route path='/products/search' element={<SearchProducts />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shoping-cart' element={<ShopingCart />} />
        <Route path='/order-completed' element={<OrderCompleted />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
root.render(<App />);

