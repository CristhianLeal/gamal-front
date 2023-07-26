import React, { useEffect, useRef, useState } from 'react';
import './aboutUs.css';
import CardPresentation from '../../Components/CardPresentation/CardPresentation';
import CardProd from '../../Components/CardProd/CardProd';
import CardComer from '../../Components/CardComer/CardComer';

const AboutUs = () => {
  const [isVisible, setVisible] = useState(false);
  const [cardVisibilities, setCardVisibilities] = useState([]);

  const ElementRef1 = useRef(null);
  const ElementRef2 = useRef(null);
  const ElementRef3 = useRef(null);
  const ElementRef4 = useRef(null);

  const handleScroll = () => {
    const refs = [ElementRef1, ElementRef2,ElementRef3, ElementRef4];
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
      <div>
      <h2 className='text-white text-center mt-4'>QUE HACEMOS?</h2>
      <p className='text-white text-center px-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet illo culpa voluptate aut tenetur modi aperiam quidem corrupti a voluptatem nisi tempore deleniti facere quisquam cumque, doloribus harum in saepe?</p>
      </div>
      <div className='px-md-5 px-3 d-flex flex-column justify-content-center'>
        <h2 className='text-white text-center mt-4'>QUIENES SOMOS?</h2>
        <div ref={ElementRef1} className={`d-flex flex-wrap align-items-center justify-content-center gap-5 llego ${cardVisibilities[0] ? 'visible' : ''}`}>
            <CardPresentation />
            <CardPresentation />
            <CardPresentation />
            <CardPresentation />
        </div>
      </div>
      <div>
        <h2 className='text-white text-center mt-4'>NUESTROS PRODUCTOS</h2>
        <div ref={ElementRef2} className={`d-flex flex-wrap gap-2 justify-content-center align-items-center llego2 ${cardVisibilities[1] ? 'visible2' : ''}`}>
          <CardProd></CardProd>
          <CardProd></CardProd>
          <CardProd></CardProd>
          <CardProd></CardProd>
        </div>
      </div>
      <div>
        <h2 className='text-white text-center mt-4'>FORMATOS COMERCIALES</h2>
        <div ref={ElementRef3} className={`d-flex flex-wrap gap-2 justify-content-center align-items-center llego3 ${cardVisibilities[2] ? 'visible3' : ''}`}>
          <CardComer></CardComer>
          <CardComer></CardComer>
          <CardComer></CardComer>
          <CardComer></CardComer>
        </div>
      </div>
      <div>
        <h2 className='text-white text-center mt-4'>METRICAS</h2>
        <div ref={ElementRef4} className={`d-flex flex-wrap gap-2 justify-content-center align-items-center llego2 ${cardVisibilities[3] ? 'visible2' : ''}`}>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quidem, itaque, debitis quaerat ipsam necessitatibus a obcaecati adipisci similique iste reiciendis quis quos libero iusto rem accusamus, iure odio voluptatem?</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;