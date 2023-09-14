import { Routes, Route, useLocation } from 'react-router-dom'
import {
  AboutUs,
  Admin,
  AdminAbout,
  AdminPosts,
  AdminUsers,
  Contact,
  DetailAbout,
  Detailpage,
  DetailPost,
  Home, Login,
  Mainpage,
  RegisterPost,
  RegisterPerson,
  RegisterProduct,
  RegisterMetric,
  RegisterHome
} from './Pages'
import { Navbar, Footer } from './Components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App () {
  const location = useLocation()
  const isAdminpage = location.pathname.includes('/admin')
  const isAdminPostspage = location.pathname.includes('/adminposts')
  const isAdminAboutpage = location.pathname.includes('/adminabout')
  const isAdminuserspage = location.pathname.includes('/adminusers')
  const isMainpage = location.pathname.includes('/mainpage')
  const isDetailpage = location.pathname.includes('/detailpage')
  const isDetailPost = location.pathname.includes('/detailpost')
  const isDetailAbout = location.pathname.includes('/detailabout')
  const isregisterpost = location.pathname.includes('/registerpost')
  const isregisterperson = location.pathname.includes('/registerperson')
  const isregisterproduct = location.pathname.includes('/registerproduct')
  const isregistermetric = location.pathname.includes('/registermetric')
  const isregisterhome = location.pathname.includes('/registerhome')
  const isContact = location.pathname.includes('/contact')
  const isAboutUs = location.pathname.includes('/aboutus')
  const isLogin = location.pathname.includes('/login')

  const renderNavAndFoot = isAdminpage || isMainpage || isDetailpage || isContact || isAboutUs || isLogin || isAdminPostspage || isAdminAboutpage || isDetailAbout || isDetailPost || isregisterpost || isAdminuserspage || isregisterperson || isregisterproduct || isregistermetric || isregisterhome
  const shouldRenderFoot = !(location.pathname === '/')

  return (
    <>
      {renderNavAndFoot && <Navbar />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/adminposts' element={<AdminPosts />} />
        <Route path='/adminabout' element={<AdminAbout />} />
        <Route path='/adminusers' element={<AdminUsers />} />
        <Route path='/mainpage' element={<Mainpage />} />
        <Route path='/detailpage' element={<Detailpage />} />
        <Route path='/detailpost/:id' element={<DetailPost />} />
        <Route path='/detailabout/:id' element={<DetailAbout />} />
        <Route path='/registerpost' element={<RegisterPost />} />
        <Route path='/registerperson' element={<RegisterPerson />} />
        <Route path='/registerproduct' element={<RegisterProduct />} />
        <Route path='/registermetric' element={<RegisterMetric />} />
        <Route path='/registerhome' element={<RegisterHome />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {shouldRenderFoot && <Footer />}
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  )
}

export default App
