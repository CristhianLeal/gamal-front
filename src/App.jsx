import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Admin from './Pages/Admin/Admin'
import Mainpage from './Pages/Mainpage/Mainpage'
import Nav from './Components/Navbar/Navbar'
import Foot from './Components/Footer/Footer'
import './App.css'

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.includes('/admin');
  const isMainpage = location.pathname.includes('/mainpage');

  const renderNavAndFoot = isAdminPage || isMainpage;

  return (
    <>
      {renderNavAndFoot && <Nav />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/mainpage' element={<Mainpage />} />
      </Routes>
      {renderNavAndFoot && <Foot />}
    </>
  )
}

export default App