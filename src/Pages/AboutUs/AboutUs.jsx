import { useEffect, useRef, useState } from 'react'
import './aboutUs.css'
import { CardPresentation, CardProd, CardComer } from '../../Components'
import axios from 'axios'

const AboutUs = () => {
  const [cardVisibilities, setCardVisibilities] = useState([])
  const [personsData, setPersonsData] = useState([])
  const [productsData, setProductsData] = useState([])
  const [metrics, setMetrics] = useState([])
  const [face, setFace] = useState(0)
  const [insta, setInsta] = useState(0)
  const [twitter, setTwitter] = useState(0)
  const [youtube, setYoutube] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ElementRef0 = useRef(null)
  const ElementRef1 = useRef(null)
  const ElementRef2 = useRef(null)
  const ElementRef3 = useRef(null)
  const ElementRef4 = useRef(null)
  const handleScroll = () => {
    const refs = [ElementRef0, ElementRef1, ElementRef2, ElementRef3, ElementRef4]
    const visibilities = refs.map((ref) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        return rect.top <= window.innerHeight && rect.bottom >= 0
      }
      return false
    })
    setCardVisibilities(visibilities)
    if (visibilities[4]) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  useEffect(() => {
    handleScroll()
    window.scrollTo(0, 0)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get('https://gamaldigital.com:8080/persons')
        setPersonsData(response.data.persons)
      } catch (error) {
        console.error('Error al obtener los datos de las personas:', error)
      }
    }
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://gamaldigital.com:8080/products')
        setProductsData(response.data.products)
      } catch (error) {
        console.error('Error al obtener los datos de los productos:', error)
      }
    }
    const fetchMetrics = async () => {
      try {
        const response = await axios.get('https://gamaldigital.com:8080/metrics')
        setMetrics(response.data.metrics[0])
      } catch (error) {
        console.error('Error al obtener los datos de las metricas:', error)
      }
    }
    fetchPersons()
    fetchProducts()
    fetchMetrics()
  }, [])
  useEffect(() => {
    if (isVisible === true) {
      let countFace = 0
      let countInsta = 0
      let countTwitter = 0
      let countYoutube = 0
      const base = 70
      const intervalId = setInterval(() => {
        if (countFace <= parseFloat(metrics.face)) {
          countFace = countFace + metrics.face / base
          countFace = parseFloat(countFace.toFixed(2))
          setFace(countFace)
        } else if (countFace > parseFloat(metrics.face)) {
          countFace = metrics.face
          setFace(countFace)
        }
        if (countInsta <= parseFloat(metrics.insta)) {
          countInsta = countInsta + metrics.insta / base
          countInsta = parseFloat(countInsta.toFixed(2))
          setInsta(countInsta)
        } else if (countInsta > parseFloat(metrics.insta)) {
          countInsta = metrics.insta
          setInsta(countInsta)
        }
        if (countTwitter <= parseFloat(metrics.twitter)) {
          countTwitter = countTwitter + metrics.twitter / base
          countTwitter = parseFloat(countTwitter.toFixed(2))
          setTwitter(countTwitter)
        } else if (countTwitter > parseFloat(metrics.twitter)) {
          countTwitter = metrics.twitter
          setTwitter(countTwitter)
        }
        if (countYoutube <= parseFloat(metrics.youtube)) {
          countYoutube = countYoutube + metrics.youtube / base
          countYoutube = parseFloat(countYoutube.toFixed(2))
          setYoutube(countYoutube)
        } else if (countYoutube > parseFloat(metrics.youtube)) {
          countYoutube = metrics.youtube
          setYoutube(countYoutube)
        }
      }, 30)
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [metrics, isVisible])
  return (
    <div className='conten'>
      <div ref={ElementRef0} className={`mt-5 llego0 ${cardVisibilities[0] ? 'visible0' : ''}`}>
        <h2 className='text-white text-center TitleH2'>QUÉ HACEMOS?</h2>
        <div className='text-white text-center metricStyle px-5 fs-4' dangerouslySetInnerHTML={{ __html: metrics.description }}></div>
      </div>
      <div ref={ElementRef1} className={`mt-5 llego ${cardVisibilities[1] ? 'visible' : ''}`}>
        <h2 className='text-white text-center TitleH2'>QUIÉNES SOMOS?</h2>
        <div className='d-flex flex-wrap align-items-center justify-content-center gap-5 align-items-stretch'>
          {personsData?.map((person) => (
            <CardPresentation key={person._id} person={person} />
          ))}
        </div>
      </div>
      <div ref={ElementRef2} className={`mt-5 llego2 ${cardVisibilities[2] ? 'visible2' : ''}`}>
        <h2 className='text-white text-center TitleH2'>NUESTROS PRODUCTOS</h2>
        <div className='d-flex flex-wrap gap-2 justify-content-center align-items-center align-items-stretch'>
          {productsData?.map((product) => (
            <CardProd key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div ref={ElementRef3} className={`mt-5 llego3 ${cardVisibilities[3] ? 'visible3' : ''}`}>
        <h2 className='text-white text-center TitleH2'>FORMATOS COMERCIALES</h2>
        <div className='d-flex flex-wrap gap-2 justify-content-center align-items-center align-items-stretch'>
          {productsData?.map((product) => (
            <CardComer key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div ref={ElementRef4} className={`mt-5 llego2 ${cardVisibilities[4] ? 'visible2' : ''}`}>
        <h2 className='text-white text-center TitleH2'>MÉTRICAS DE TN</h2>
        <div className='d-flex flex-column'>
          <div className='d-flex flex-column flex-md-row gap-md-5 justify-content-center align-items-center'>
            {metrics.people && <div className='d-flex flex-row flex-md-column justify-content-center align-items-center tam'>
              <i className="bi bi-people-fill IconMetric px-2"></i>
              <p className='text-white text-center m-0 px-3 py-2 fs-4'>{metrics.people}</p>
            </div>}
            {metrics.woman && <div className='d-flex flex-row flex-md-column justify-content-center align-items-center'>
              <i className="bi bi-gender-female IconMetric px-2"></i>
              <p className='text-white text-center m-0 px-3 py-2 fs-4'>{metrics.woman}% Mujeres</p>
            </div>}
            {metrics.man && <div className='d-flex flex-row flex-md-column justify-content-center align-items-center'>
              <i className="bi bi-gender-male IconMetric px-2"></i>
              <p className='text-white text-center m-0 px-3 py-2 fs-4'>{metrics.man}% Hombres</p>
            </div>}
          </div>
          <div className='d-flex flex-column flex-md-row gap-md-5 justify-content-center align-items-center mt-md-5 mt-3'>
            {metrics.face && <div className='d-flex flex-row flex-md-column justify-content-center align-items-center'>
              <i className="bi bi-facebook IconMetric2 px-2"></i>
              <p className='color-metric text-center m-0 px-3 py-0 fs-4'><b>{face} M</b></p>
            </div>}
            {metrics.insta && <div className='d-flex flex-row flex-md-column justify-content-center align-items-center'>
              <i className="bi bi-instagram IconMetric2 px-2"></i>
              <p className='color-metric text-center m-0 px-3 py-0 fs-4'><b>{insta} M</b></p>
            </div>}
            {metrics.twitter && <div className='d-flex flex-row flex-md-column justify-content-center align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="60" fill="currentColor" className="IconMetric2 px-2" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
              </svg>
              <p className='color-metric text-center m-0 px-3 py-0 fs-4'><b>{twitter} M</b></p>
            </div>}
            {metrics.youtube && <div className='d-flex flex-row flex-md-column justify-content-center align-items-center'>
              <i className="bi bi-youtube IconMetric2 px-2"></i>
              <p className='color-metric text-center m-0 px-3 py-0 fs-4'><b>{youtube} M</b></p>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
