
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Layout/Main'
import Basket from './Pages/Basket'
import Contact from './Pages/Contact'
import Detail from './Pages/Detail'
import Home from './Pages/HomePage'
import Shop from './Pages/ShopPage'
import Wishlist from './Pages/Wishlist'
import Search from './Pages/Search'
import Admin from './Pages/Admin'
import Faqs from './Pages/FAQS'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Main/>}>
        <Route path='/home'element={<Home/>}></Route>
        <Route path='/basket'element={<Basket/>}></Route>
        <Route path='/wishlist'element={<Wishlist/>}></Route>
        <Route path='/:id'element={<Detail/>}></Route>
        <Route path='/contact'element={<Contact/>}></Route>
        <Route path='/shop'element={<Shop/>}></Route>
        <Route path='/search'element={<Search/>}></Route>
        <Route path='/admin'element={<Admin/>}></Route>
        <Route path='/faqs'element={<Faqs/>}></Route>
      </Route>
     </Routes>
    </>
  )
}

export default App
