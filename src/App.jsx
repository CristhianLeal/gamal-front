import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Admin from './Pages/Admin/Admin';
import Mainpage from './Pages/Mainpage/Mainpage';
import Detailpage from './Pages/Detailpage/Detailpage';
import Contact from './Pages/Contact/Contact';
import AboutUs from './Pages/AboutUs/AboutUs';
import Nav from './Components/Navbar/Navbar';
import Foot from './Components/Footer/Footer';
import './App.css';

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.includes('/admin');
  const isMainpage = location.pathname.includes('/mainpage');
  const isDetailpage = location.pathname.includes('/detailpage');
  const isContact = location.pathname.includes('/contact');
  const isAboutUs = location.pathname.includes('/aboutus');
  
  const renderNavAndFoot = isAdminPage || isMainpage || isDetailpage || isContact || isAboutUs;
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
      </Routes>
      {shouldRenderFoot && <Foot />}
    </>
  );
}

export default App;