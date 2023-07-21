import React, { useEffect } from 'react';
import './detailpage.css'
import imgcard from '../../assets/imgcard.jpg'


const DetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h3 className='text-white text-center titleDetail'>Título</h3>
      <p className='text-white text-center'>Descripción</p>
      <div className='d-flex flex-row'>
        <div className='d-flex flex-column col-6'>
          <h4 className='text-center text-white'>Imagenes</h4>
          <div className='d-flex flex-wrap align-items-center justify-content-center gap-4'>
            <img src={imgcard} className="imgDetail border-0 col-5" alt="Imagen" />
            <img src={imgcard} className="imgDetail border-0 col-5" alt="Imagen" />
            <img src={imgcard} className="imgDetail border-0 col-5" alt="Imagen" />
            <img src={imgcard} className="imgDetail border-0 col-5" alt="Imagen" />
          </div>
        </div>
        <div className='d-flex flex-column col-6'>
          <h4 className='text-center text-white'>Videos</h4>
          <div className='d-flex flex-wrap align-items-center justify-content-center gap-4'>
          <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail col-5'></iframe>
            <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail col-5'></iframe>
            <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail col-5'></iframe>
            <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail col-5'></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;