import React, { useEffect , useState } from 'react';
import './detailpage.css'
import imgcard from '../../assets/imgcard.jpg'


const DetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showFullScreenImage, setShowFullScreenImage] = useState(false);
  const toggleFullScreenImage = () => {
    setShowFullScreenImage((prev) => !prev);
  } 
  
  return (
    <div>
      <h3 className='text-white text-center titleDetail'>Título</h3>
      <p className='text-white text-center mb-5 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, enim ratione in eius, eum quo repellat unde sed incidunt ab itaque earum tempore porro dolorum ipsum cum consequuntur modi quibusdam.</p>
      <div className='d-flex flex-md-row flex-column align-items-center align-items-md-start'>
        <div className='d-flex flex-column col-md-6 col-12 mb-5'>
          <h4 className='text-center text-white mb-4'>Imagenes</h4>
          <div className='d-flex flex-wrap align-items-center justify-content-center gap-4'>
            <img src={imgcard} className="imgDetail border-0 col-md-5 col-11" alt="Imagen" onClick={toggleFullScreenImage}/>
            <img src={imgcard} className="imgDetail border-0 col-md-5 col-11" alt="Imagen" onClick={toggleFullScreenImage}/>
            <img src={imgcard} className="imgDetail border-0 col-md-5 col-11" alt="Imagen" onClick={toggleFullScreenImage}/>
            <img src={imgcard} className="imgDetail border-0 col-md-5 col-11" alt="Imagen" onClick={toggleFullScreenImage}/>
          </div>
        </div>
        <div className='d-flex flex-column col-md-6 col-12 mb-5'>
          <h4 className='text-center text-white'>Videos</h4>
          <div className='d-flex flex-wrap align-items-center justify-content-center gap-4'>
            <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail col-md-5 col-11' style={{ height: '350px' }} ></iframe>
            <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail col-md-5 col-11' style={{ height: '350px' }}></iframe>
            <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail col-md-5 col-11' style={{ height: '350px' }}></iframe>
            <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail col-md-5 col-11' style={{ height: '350px' }}></iframe>
          </div>
        </div>
      </div>
      {showFullScreenImage && (
        <div className="fullscreen-image-overlay" onClick={toggleFullScreenImage}>
          <img src={imgcard} className="fullscreen-image" alt="Imagen" />
        </div>
      )}
    </div>
  );
};

export default DetailPage;