import { useEffect, useRef, useState } from 'react'
import './detailpage.css'
import axios from 'axios'

const ScrollToVideosButton = () => {
  const scrollToVideos = () => {
    const videoSection = document.getElementById('videosSection')
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <button className="scroll-to-videos-button" onClick={scrollToVideos}>
      Videos
    </button>
  )
}
const ScrollToReelsButton = () => {
  const scrollToReels = () => {
    const reelsSection = document.getElementById('reelsSection')
    if (reelsSection) {
      reelsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <button className="scroll-to-reels-button" onClick={scrollToReels}>
      Reels
    </button>
  )
}
const ScrollToPicturesButton = () => {
  const scrollToPictures = () => {
    const picturesSection = document.getElementById('picturesSection')
    if (picturesSection) {
      picturesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <button className="scroll-to-pictures-button" onClick={scrollToPictures}>
      Fotos
    </button>
  )
}

const DetailPage = () => {
  const [contVisible, setContVisible] = useState([])
  const [showFullScreenImage, setShowFullScreenImage] = useState(false)
  const [photo, setPhoto] = useState(false)
  const [post, setPost] = useState([])
  const postId = localStorage.getItem('postId')
  const ERef0 = useRef(null)
  const ERef1 = useRef(null)
  const ERef2 = useRef(null)
  const ERef3 = useRef(null)
  const handleScroll = () => {
    const refs = [ERef0, ERef1, ERef2, ERef3]
    const visibilities = refs.map((ref) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        return rect.top <= window.innerHeight && rect.bottom >= 0
      }
      return false
    })
    setContVisible(visibilities)
  }
  const toggleFullScreenImage = (foto) => {
    setPhoto(foto)
    setShowFullScreenImage((prev) => !prev)
  }
  useEffect(() => {
    handleScroll()
    window.scrollTo(0, 0)
    window.addEventListener('scroll', handleScroll)
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://100.24.70.232/posts/${postId}`)
        setPost(response.data.post)
        handleScroll()
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
    <div className='conten'>
      <div ref={ERef0} className={`Efectd1 ${contVisible[0] ? 'EfectVisibled1' : ''}`}>
        <h3 className='text-white text-center titleDetail'>{post.name}</h3>
        <p className='text-white text-center mb-5 px-2'>{post.description}</p>
      </div>
      <div id="picturesSection"></div>
      {post.fotos && post.fotos.length > 0 && <div ref={ERef1} className={`Efectd2 ${contVisible[1] ? 'EfectVisibled2' : ''}`}>
        <div className='d-flex flex-column col-12 mb-5'>
          <h4 className='text-center text-white mb-4 SubDetail'>Imagenes</h4>
          <div className='d-flex flex-wrap align-items-center justify-content-center gap-4'>
            {post.fotos?.map((foto, index) => (
              <img key={index} src={foto} className="imgDetail border-0 col-md-3 col-11" alt="Imagen" onClick={() => toggleFullScreenImage(foto)} />
            ))}
          </div>
        </div>
      </div>}
      <div id="videosSection" ></div>
      {post.videos && post.videos.length > 0 && <div ref={ERef2} className={`Efectd3 ${contVisible[2] ? 'EfectVisibled3' : ''}`}>
        <div className='d-flex flex-column col-12 mb-5'>
          <h4 className='text-center text-white mb-4 SubDetail'>Videos</h4>
          <div className='d-flex flex-wrap align-items-center justify-content-center gap-4'>
            {post.videos?.map((video, index) => {
              const parts = video.split('v=')
              const videoCode = parts.length > 1 ? parts[1] : ''
              return (
                <iframe
                  key={index}
                  src={`https://www.youtube.com/embed/${videoCode}`}
                  title="Somos Gamal Digital"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className='videoDetail col-md-5 col-11'
                  style={{ height: '350px' }}
                ></iframe>
              )
            })}
          </div>
        </div>
      </div>}
      <div id="reelsSection" ></div>
      {post.reels && post.reels.length > 0 && <div ref={ERef3} className={`Efectd2 ${contVisible[3] ? 'EfectVisibled2' : ''}`}>
        <div className='d-flex flex-column col-12 mb-5'>
          <h4 className='text-center text-white mb-4 SubDetail'>Reels</h4>
          <div className='d-flex flex-wrap align-items-center justify-content-center gap-4'>
            {post.reels?.map((reel, index) => (
              <iframe key={index} src={`${reel}embed`} className='reels' scrolling="no"></iframe>
            ))}
          </div>
        </div>
      </div>}
      {showFullScreenImage && (
        <div className="fullscreen-image-overlay" onClick={toggleFullScreenImage}>
          <img src={photo} className="fullscreen-image" alt="Imagen" />
        </div>
      )}
      <script async src="//www.instagram.com/embed.js"></script>
      {post.fotos && post.fotos.length > 0 && <ScrollToPicturesButton className='scroll-to-pictures-button buttonStyle py-0 px-2' />}
      {post.videos && post.videos.length > 0 && <ScrollToVideosButton className='scroll-to-videos-button buttonStyle py-0 px-2' />}
      {post.reels && post.reels.length > 0 && <ScrollToReelsButton className='scroll-to-reels-button buttonStyle py-0 px-2'/>}
    </div>
  )
}

export default DetailPage
