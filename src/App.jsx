import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Admin from './Pages/Admin/Admin';
import Mainpage from './Pages/Mainpage/Mainpage';
import Detailpage from './Pages/Detailpage/Detailpage';
import Contact from './Pages/Contact/Contact';
import AboutUs from './Pages/AboutUs/AboutUs';
import Nav from './Components/Navbar/Navbar';
import Foot from './Components/Footer/Footer';
import Login from './Pages/Login/Login'
import './App.css';

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.includes('/admin');
  const isMainpage = location.pathname.includes('/mainpage');
  const isDetailpage = location.pathname.includes('/detailpage');
  const isContact = location.pathname.includes('/contact');
  const isAboutUs = location.pathname.includes('/aboutus');
  const isLogin = location.pathname.includes('/login');
  
  const renderNavAndFoot = isAdminPage || isMainpage || isDetailpage || isContact || isAboutUs || isLogin;
  const shouldRenderFoot = !(location.pathname === '/');

  return (
    <>
      {renderNavAndFoot && <Nav />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/mainpage' element={<Mainpage />} />
        <Route path='/detailpage' element={<Detailpage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {shouldRenderFoot && <Foot />}
    </>
  );
}

export default App;