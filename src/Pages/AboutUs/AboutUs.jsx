import React, { useEffect, useRef, useState } from 'react';
import './aboutUs.css';
import CardPresentation from '../../Components/CardPresentation/CardPresentation';

const AboutUs = () => {
  const [isVisible, setVisible] = useState(false);
  const [cardVisibilities, setCardVisibilities] = useState([]);

  const ElementRef1 = useRef(null);
  const ElementRef2 = useRef(null);
  const ElementRef3 = useRef(null);

  const handleScroll = () => {
    const refs = [ElementRef1, ElementRef2, ElementRef3];
    const visibilities = refs.map((ref) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      }
      return false;
    });

    // If at least one card is visible, set isVisible to true
    setVisible(visibilities.some((visibility) => visibility));

    // Update individual card visibilities
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
        {/* ... */}
      </div>
      <div className='px-md-5 px-3 d-flex flex-column justify-content-center'>
        <h2 className='text-white text-center mt-4'>QUIENES SOMOS?</h2>
        <div className='d-flex flex-wrap align-items-center justify-content-center gap-5'>
          <div ref={ElementRef1} className={`llego ${cardVisibilities[0] ? 'visible' : ''}`}>
            <CardPresentation />
          </div>
          <div ref={ElementRef2} className={`llego ${cardVisibilities[1] ? 'visible' : ''}`}>
            <CardPresentation />
          </div>
          <div ref={ElementRef3} className={`llego ${cardVisibilities[2] ? 'visible' : ''}`}>
            <CardPresentation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;