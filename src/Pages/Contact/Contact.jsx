import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import './contact.css'

const Contact = () => {
  const { register, formState: { errors } } = useForm()

  const [contVisible, setContVisible] = useState([])

  const ERef0 = useRef(null)
  const ERef1 = useRef(null)
  const ERef2 = useRef(null)

  const handleScroll = () => {
    const refs = [ERef0, ERef1, ERef2]
    const visibilities = refs.map((ref) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        return rect.top <= window.innerHeight && rect.bottom >= 0
      }
      return false
    })
    setContVisible(visibilities)
  }

  useEffect(() => {
    handleScroll()
    window.scrollTo(0, 0)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='mt-5 mb-5'>
      <div ref={ERef0} className={`Efect1 ${contVisible[0] ? 'EfectVisible1' : ''}`}>
        <h2 className='text-white text-center titleContact m-0'>CONTACTANOS!</h2>
      </div>

      <div ref={ERef1} className={`d-flex justify-content-center align-items-center Efect2 ${contVisible[1] ? 'EfectVisible2' : ''}`}>
        <form action="https://formsubmit.co/gamaldigital@gmail.com" method="POST" className='d-flex flex-column align-items-center justify-content-center col-sm-6 col-10' >
            <div className='d-flex flex-row align-items-center justify-content-center col-12 py-2'>
              <label className='text-white typeForm col-md-2 col-3' htmlFor='name'>Nombre:</label>
              <input
                className='col-9 col-md-10'
                type='text'
                name='name'
                id='name'
                placeholder='Example'
                {...register('name', {
                  required: 'Este campo es obligatorio',
                  pattern: {
                    value: /^[A-Za-z]{3,30}$/,
                    message: 'Ingresá solo letras (Min 3 - Max 30) '

                  }
                })}
              />
            </div>
            {errors.name && <span className='text-danger'>{errors.name.message}</span>}
            <div className='d-flex flex-row align-items-center justify-content-center col-12 py-2'>
              <label className='text-white typeForm col-md-2 col-3' htmlFor='email'>Email:</label>
              <input
                className='col-9 col-md-10'
                type='email'
                name='email'
                id='email'
                placeholder='example@example.com'
                {...register('email', {
                  required: 'Este campo es obligatorio',
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]{3,30}@[A-Z0-9.-]{3,10}\.[A-Z]{2,4}$/i,
                    maxLength: 50,
                    message: 'Dirección de correo inválida (Max 50)'
                  }
                })}
              />
            </div>
            {errors.email && <span className='text-danger'>{errors.email.message}</span>}
            <div className='d-flex flex-row align-items-center justify-content-center col-12 pt-2 pb-3'>
              <label className='text-white typeForm col-md-2 col-3 px-1' htmlFor='message'>Mensaje:</label>
              <textarea
                className='col-9 col-md-10'
                id='message'
                name='message'
                placeholder='You could write your message here...'
                {...register('message', {
                  required: 'Este campo es obligatorio',
                  pattern: {
                    value: /^[A-Za-z0-9._%+-@ ]{3,250}$/,
                    maxLength: 250,
                    message: 'Error en el mensaje (Min 3 - Max 250) '

                  }
                })}
              />
            </div>
            {errors.message && <span className='text-danger'>{errors.message.message}</span>}
            <button className='ButtonForm p-1 d-flex justify-content-center align-items-center' type='submit'>Enviar</button>
            <input type="hidden" name='_next' value='http://127.0.0.1:5173/'/>
            <input type="hidden" name='_captcha' value='false'/>
        </form>
      </div>

      <div ref={ERef2} className={`Efect1 ${contVisible[2] ? 'EfectVisible1' : ''}`}>
        <h3 className='text-white text-center mt-5'>SEGUINOS EN NUESTRAS REDES!</h3>
        <div className='d-flex justify-content-center align-items-center gap-sm-5'>
          <i className="bi bi-facebook IconContact px-2 py-2 facebook"></i>
          <a className=' text-decoration-none' href="https://www.instagram.com/gamaldigital/" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram IconContact px-2 py-2 instagram"></i>
          </a>
          <a className=' text-decoration-none' href="https://www.tiktok.com/@gamaldigital" target="_blank" rel="noreferrer">
            <i className="bi bi-tiktok IconContact px-2 py-2 tiktok"></i>
          </a>
          <a className=' text-decoration-none' href="https://www.youtube.com/channel/UCbkEnyeMxokKJyZ8ULg-Stw" target="_blank" rel="noreferrer">
            <i className="bi bi-youtube IconContact px-2 py-2 youtube"></i>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Contact
