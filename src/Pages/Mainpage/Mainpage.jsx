import { useEffect, useRef, useState } from 'react'
import './mainpage.css'
import Card from '../../Components/Card/Card'
import axios from 'axios'

const Mainpage = () => {
  const [TitleVisibilities, setTitleVisibilities] = useState([])
  const [postData, setPostData] = useState([])

  const TitleRef1 = useRef(null)
  const TitleRef2 = useRef(null)
  const TitleRef3 = useRef(null)

  const handleScroll = () => {
    const refs = [TitleRef1, TitleRef2, TitleRef3]
    const visibilities = refs.map((ref) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        return rect.top <= window.innerHeight && rect.bottom >= 0
      }
      return false
    })
    setTitleVisibilities(visibilities)
  }

  useEffect(() => {
    handleScroll()
    window.scrollTo(0, 0)
    window.addEventListener('scroll', handleScroll)
    const fetchPost = async () => {
      try {
        const response = await axios.get('https://gamaldigital.com:8080/posts')
        setPostData(response.data.posts)
      } catch (error) {
        console.error('Error al obtener los posts:', error)
      }
    }
    fetchPost()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='mainPage conten'>
      <div className='portada d-flex justify-content-center flex-column'>
        <h1 ref={TitleRef1} className={`h1Portada text-center llegot ${TitleVisibilities[0] ? 'visiblet' : ''}`}>SOMOS GAMAL DIGITAL</h1>
        <h2 ref={TitleRef2} className={`h2Portada text-center llegot2 ${TitleVisibilities[1] ? 'visiblet2' : ''}`}>CREAMOS CONTENIDO AUDIOVISUAL DE CALIDAD</h2>
      </div>
      <div>
        <h2 ref={TitleRef3} className={`h2Portada mt-4 text-center llegot3 ${TitleVisibilities[2] ? 'visiblet3' : ''}`}>NUESTROS TRABAJOS</h2>
        <div className='d-flex flex-wrap align-items-center justify-content-center gap-5 mt-3 mb-3'>
          {postData?.map((post) => (
            <Card key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mainpage
