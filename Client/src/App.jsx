
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Layout/Main'
import Basket from './Pages/Basket'
import Contact from './Pages/Contact'
import Detail from './Pages/Detail'
import Home from './Pages/HomePage'
import Search from './Pages/Search'
import Shop from './Pages/ShopPage'
import Wishlist from './Pages/Wishlist'
import ErrorPage from './Pages/ErrorPage'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import About from './Pages/About'
import AdminPage from './Pages/AdminPage'
import Faqs from './Pages/FAQS'
import Login from './Pages/LoginReg'
import ScrollToTop from './Components/HomePage/ScrollToTop'
import LoginPage from './Pages/LoginPage'
import AdminLogo from './Pages/AdminLogo'
import AdminProduct from './Pages/AdminProduct'
// import MainLayoutAdmin from './LayoutAdmin/'
import { RingLoader } from 'react-spinners'
import MainLayoutAdmin from './Components/LayoutAdmin/MainLayoutAdmin'
import AdminSwiper from './Pages/AdminSwiper'
import AdminMarketing from './Pages/AdminSwiper'
import AdminUser from './Pages/AdminUser'

function App() {

  useEffect(() => {
    Aos.init()
  }, [])

  const [IsLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <ScrollToTop />
      {
        IsLoading ? <div className='loading'>
          <RingLoader color='#9dbc98' />
        </div> : <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Home />} />
            <Route path='/basket' element={<Basket />}></Route>
            <Route path='/wishlist' element={<Wishlist />}></Route>
            <Route path='/product/:id' element={<Detail />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/faqs' element={<Faqs />}></Route>

            <Route path='/about' element={<About />}></Route>

            <Route path='/register' element={<Login />}></Route>




          </Route>
          <Route path='*' element={<ErrorPage />} />
          
          <Route path='/adminn' element={<MainLayoutAdmin/>}>
              <Route index element={<AdminPage />}></Route>
              <Route path='/adminn/adminuser' element={<AdminUser/>}></Route>
              <Route path='/adminn/adminlogo' element={<AdminLogo/>}></Route>
              <Route path='/adminn/adminproduct' element={<AdminProduct />}></Route>
              <Route path='/adminn/adminswiper' element={<AdminMarketing />}></Route>
            </Route>
        </Routes>
      }

      {/* <Seller/> */}
    </>
  )
}

export default App
