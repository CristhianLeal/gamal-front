import React,{ useEffect } from 'react'
import './mainpage.css'
import Card from '../../Components/Card/Card'

const Mainpage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='mainPage'>
      <div className='portada d-flex justify-content-center flex-column'>
        <h1 className='h1Portada text-center'>SOMOS GAMAL DIGITAL</h1>
        <h2 className='h2Portada text-center' id="trabajos-section">CREAMOS CONTENIDO AUDIOVISUAL DE CALIDAD</h2>
      </div>
      <div className='d-flex flex-wrap align-items-center justify-content-center gap-5 mt-3'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  )
}

export default Mainpage