import React, { useEffect, useRef, useState } from 'react';
import './detailpage.css'
import imgcard from '../../assets/imgcard.jpg'


const DetailPage = () => {
  const [isVisibleC, setVisibleC] = useState(false);
  const [contVisible, setContVisible] = useState([]);

  const ERef0 = useRef(null);
  const ERef1 = useRef(null);
  const ERef2 = useRef(null);
  const ERef3 = useRef(null);

  const handleScroll = () => {
    const refs = [ERef0,ERef1,ERef2,ERef3];
    const visibilities = refs.map((ref) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      }
      return false;
    });
    setVisibleC(visibilities.some((visibility) => visibility));
    setContVisible(visibilities);
  };

  useEffect(() => {
    handleScroll();
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [showFullScreenImage, setShowFullScreenImage] = useState(false);
  const toggleFullScreenImage = () => {
    setShowFullScreenImage((prev) => !prev);
  } 
  
  return (
    <div>
      <div ref={ERef0} className={`Efectd1 ${contVisible[0] ? 'EfectVisibled1' : ''}`}>
        <h3 className='text-white text-center titleDetail'>Título</h3>
        <p className='text-white text-center mb-5 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, enim ratione in eius, eum quo repellat unde sed incidunt ab itaque earum tempore porro dolorum ipsum cum consequuntur modi quibusdam.</p>
      </div>

      <div ref={ERef1} className={`Efectd2 ${contVisible[1] ? 'EfectVisibled2' : ''}`}>
        <div className='d-flex flex-column col-12 mb-5'>
          <h4 className='text-center text-white mb-4'>Imagenes</h4>
          <div className='d-flex flex-wrap align-items-center justify-content-center gap-4'>
            <img src={imgcard} className="imgDetail border-0 col-md-3 col-11" alt="Imagen" onClick={toggleFullScreenImage}/>
            <img src={imgcard} className="imgDetail border-0 col-md-3 col-11" alt="Imagen" onClick={toggleFullScreenImage}/>
            <img src={imgcard} className="imgDetail border-0 col-md-3 col-11" alt="Imagen" onClick={toggleFullScreenImage}/>
            <img src={imgcard} className="imgDetail border-0 col-md-3 col-11" alt="Imagen" onClick={toggleFullScreenImage}/>
          </div>
        </div>
      </div>
      <div ref={ERef2} className={`Efectd3 ${contVisible[2] ? 'EfectVisibled3' : ''}`}>
      <div className='d-flex flex-column col-12 mb-5'>
          <div className='d-flex flex-wrap align-items-center justify-content-center gap-4'>
            <h4 className='text-center text-white'>Videos</h4>
            <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail col-md-5 col-11' style={{ height: '350px' }} ></iframe>
            <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail col-md-5 col-11' style={{ height: '350px' }}></iframe>
            <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail col-md-5 col-11' style={{ height: '350px' }}></iframe>
            <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail col-md-5 col-11' style={{ height: '350px' }}></iframe>
          </div>
        </div>
      </div>
      <div ref={ERef3} className={`Efectd2 ${contVisible[3] ? 'EfectVisibled2' : ''}`}>
        <div className='d-flex flex-column col-12 mb-5'>
          <h4 className='text-center text-white mb-4'>Reels</h4>
          <div className='d-flex flex-wrap align-items-center justify-content-center gap-4'>
            <iframe className='reels' src="https://www.instagram.com/reel/CuieYE4sA8e/embed" scrolling="no"></iframe>
            <iframe className='reels' src="https://www.instagram.com/reel/CuieYE4sA8e/embed" scrolling="no"></iframe>
            <iframe className='reels' src="https://www.instagram.com/reel/CuieYE4sA8e/embed" scrolling="no"></iframe>
            <iframe className='reels' src="https://www.instagram.com/reel/CuieYE4sA8e/embed" scrolling="no"></iframe>
          </div>
        </div>
      </div>
      {showFullScreenImage && (
        <div className="fullscreen-image-overlay" onClick={toggleFullScreenImage}>
          <img src={imgcard} className="fullscreen-image" alt="Imagen" />
        </div>
      )}
      <script async src="//www.instagram.com/embed.js"></script>
    </div>
  );
};

export default DetailPage;