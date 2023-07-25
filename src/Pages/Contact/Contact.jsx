import React, { useEffect, useRef, useState } from 'react';
import './contact.css';

const Contact = () => {
  const [isThirdElementVisible, setThirdElementVisible] = useState(false);
  const thirdElementRef = useRef(null);
  const handleScroll = () => {
    if (thirdElementRef.current) {
      const rect = thirdElementRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setThirdElementVisible(true);
      } else {
        setThirdElementVisible(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 className={`text-white ${isThirdElementVisible ? 'scrolled' : ''}`} ref={thirdElementRef}>ELEMENTO</h1>
      <h1 className='text-white'>CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
      <h1 >CONTACTO</h1>
    </div>
  );
};

export default Contact;