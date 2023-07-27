import React, { useEffect, useRef, useState } from 'react';
import './aboutUs.css';
import CardPresentation from '../../Components/CardPresentation/CardPresentation';
import CardProd from '../../Components/CardProd/CardProd';
import CardComer from '../../Components/CardComer/CardComer';

const AboutUs = () => {
  const [isVisible, setVisible] = useState(false);
  const [cardVisibilities, setCardVisibilities] = useState([]);

  const ElementRef0 = useRef(null);
  const ElementRef1 = useRef(null);
  const ElementRef2 = useRef(null);
  const ElementRef3 = useRef(null);
  const ElementRef4 = useRef(null);

  const handleScroll = () => {
    const refs = [ElementRef0,ElementRef1, ElementRef2,ElementRef3, ElementRef4];
    const visibilities = refs.map((ref) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      }
      return false;
    });
    setVisible(visibilities.some((visibility) => visibility));
    setCardVisibilities(visibilities);
  };

  useEffect(() => {
    handleScroll();
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div ref={ElementRef0} className={`llego0 ${cardVisibilities[0] ? 'visible0' : ''}`}>
        <h2 className='text-white text-center mt-4'>QUE HACEMOS?</h2>
        <p className='text-white text-center px-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet illo culpa voluptate aut tenetur modi aperiam quidem corrupti a voluptatem nisi tempore deleniti facere quisquam cumque, doloribus harum in saepe?</p>
      </div>
      <div  ref={ElementRef1} className={`px-md-5 px-3 d-flex flex-column justify-content-center llego ${cardVisibilities[1] ? 'visible' : ''}`}>
        <h2 className='text-white text-center mt-4'>QUIENES SOMOS?</h2>
        <div className='d-flex flex-wrap align-items-center justify-content-center gap-5'>
            <CardPresentation />
            <CardPresentation />
            <CardPresentation />
            <CardPresentation />
        </div>
      </div>
      <div ref={ElementRef2} className={`llego2 ${cardVisibilities[2] ? 'visible2' : ''}`}>
        <h2 className='text-white text-center mt-4'>NUESTROS PRODUCTOS</h2>
        <div className='d-flex flex-wrap gap-2 justify-content-center align-items-center'>
          <CardProd></CardProd>
          <CardProd></CardProd>
          <CardProd></CardProd>
          <CardProd></CardProd>
        </div>
      </div>
      <div ref={ElementRef3} className={`llego3 ${cardVisibilities[3] ? 'visible3' : ''}`}>
        <h2 className='text-white text-center mt-4'>FORMATOS COMERCIALES</h2>
        <div className='d-flex flex-wrap gap-2 justify-content-center align-items-center'>
          <CardComer></CardComer>
          <CardComer></CardComer>
          <CardComer></CardComer>
          <CardComer></CardComer>
        </div>
      </div>
      <div>
        <h2 className='text-white text-center mt-4'>METRICAS</h2>
        <div ref={ElementRef4} className={`d-flex flex-column flex-md-row gap-md-5 justify-content-center align-items-center llego2 ${cardVisibilities[4] ? 'visible2' : ''}`}>
          <div className='d-flex flex-row flex-md-column justify-content-center align-items-center'>
            <i class="bi bi-people-fill IconMetric px-2"></i>
            <p className='text-white text-center m-0 px-3 py-2'>People</p>
          </div>
          <div className='d-flex flex-row flex-md-column justify-content-center align-items-center'>
            <i class="bi bi-gender-male IconMetric px-2"></i>
            <p className='text-white text-center m-0 px-3 py-2'>MAN</p>
          </div>
          <div className='d-flex flex-row flex-md-column justify-content-center align-items-center'>
            <i class="bi bi-gender-female IconMetric px-2"></i>
            <p className='text-white text-center m-0 px-3 py-2'>WOMAN</p>
          </div>
          <div className='d-flex flex-row flex-md-column justify-content-center align-items-center'>
            <i class="bi bi-gender-female IconMetric px-2"></i>
            <p className='text-white text-center m-0 px-3 py-2'>WOMAN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;