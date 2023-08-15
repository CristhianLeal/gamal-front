import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Admin from './Pages/Admin/Admin';
import AdminPosts from './Pages/AdminPosts/AdminPosts';
import AdminAbout from './Pages/AdminAbout/AdminAbout';
import Mainpage from './Pages/Mainpage/Mainpage';
import Detailpage from './Pages/Detailpage/Detailpage';
import DetailPost from './Pages/DetailPost/DetailPost';
import DetailAbout from './Pages/DetailAbout/DetailAbout';
import RegisterPost from './Pages/RegisterPost/RegisterPost';
import Contact from './Pages/Contact/Contact';
import AboutUs from './Pages/AboutUs/AboutUs';
import Nav from './Components/Navbar/Navbar';
import Foot from './Components/Footer/Footer';
import Login from './Pages/Login/Login'
import './App.css';

function App() {
  const location = useLocation();
  const isAdminpage = location.pathname.includes('/admin');
  const isAdminPostspage = location.pathname.includes('/adminposts');
  const isAdminAboutpage = location.pathname.includes('/adminabout');
  const isMainpage = location.pathname.includes('/mainpage');
  const isDetailpage = location.pathname.includes('/detailpage');
  const isDetailPost = location.pathname.includes('/detailpost');
  const isDetailAbout = location.pathname.includes('/detailabout');
  const isregisterpost = location.pathname.includes('/registerpost');
  const isContact = location.pathname.includes('/contact');
  const isAboutUs = location.pathname.includes('/aboutus');
  const isLogin = location.pathname.includes('/login');
  
  const renderNavAndFoot = isAdminpage || isMainpage || isDetailpage || isContact || isAboutUs || isLogin ||isAdminPostspage || isAdminAboutpage || isDetailAbout || isDetailPost || isregisterpost;
  const shouldRenderFoot = !(location.pathname === '/');

  return (
    <>
      {renderNavAndFoot && <Nav />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/adminposts' element={<AdminPosts />} />
        <Route path='/adminabout' element={<AdminAbout />} />
        <Route path='/mainpage' element={<Mainpage />} />
        <Route path='/detailpage' element={<Detailpage />} />
        <Route path='/detailpost/:id' element={<DetailPost />} />
        <Route path='/detailabout/:id' element={<DetailAbout />} />
        <Route path='/registerpost' element={<RegisterPost />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {shouldRenderFoot && <Foot />}
    </>
  );
}

export default App;