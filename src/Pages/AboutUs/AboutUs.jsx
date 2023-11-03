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
      const intervalId = setInterval(() => {
        if (countFace <= parseFloat(metrics.face)) {
          countFace += 0.1
          countFace = parseFloat(countFace.toFixed(2))
          setFace(countFace)
        }
        if (countInsta <= parseFloat(metrics.insta)) {
          countInsta += 0.1
          countInsta = parseFloat(countInsta.toFixed(2))
          setInsta(countInsta)
        }
        if (countTwitter <= parseFloat(metrics.twitter)) {
          countTwitter += 0.1
          countTwitter = parseFloat(countTwitter.toFixed(2))
          setTwitter(countTwitter)
        }
        if (countYoutube <= parseFloat(metrics.youtube)) {
          countYoutube += 0.1
          countYoutube = parseFloat(countYoutube.toFixed(2))
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
        <h2 className='text-white text-center TitleH2'>QUE HACEMOS?</h2>
        <p className='text-white text-center metricStyle px-5 fs-4'>{metrics.description}</p>
      </div>
      <div ref={ElementRef1} className={`mt-5 llego ${cardVisibilities[1] ? 'visible' : ''}`}>
        <h2 className='text-white text-center TitleH2'>QUIENES SOMOS?</h2>
        <div className='d-flex flex-wrap align-items-center justify-content-center gap-5'>
          {personsData?.map((person) => (
            <CardPresentation key={person._id} person={person} />
          ))}
        </div>
      </div>
      <div ref={ElementRef2} className={`mt-5 llego2 ${cardVisibilities[2] ? 'visible2' : ''}`}>
        <h2 className='text-white text-center TitleH2'>NUESTROS PRODUCTOS</h2>
        <div className='d-flex flex-wrap gap-2 justify-content-center align-items-center'>
          {productsData?.map((product) => (
            <CardProd key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div ref={ElementRef3} className={`mt-5 llego3 ${cardVisibilities[3] ? 'visible3' : ''}`}>
        <h2 className='text-white text-center TitleH2'>FORMATOS COMERCIALES</h2>
        <div className='d-flex flex-wrap gap-2 justify-content-center align-items-center'>
          {productsData?.map((product) => (
            <CardComer key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div ref={ElementRef4} className={`mt-5 llego2 ${cardVisibilities[4] ? 'visible2' : ''}`}>
        <h2 className='text-white text-center TitleH2'>METRICAS</h2>
        <div className='d-flex flex-column'>
          <div className='d-flex flex-column flex-md-row gap-md-5 justify-content-center align-items-center'>
            {metrics.people && <div className='d-flex flex-row flex-md-column justify-content-center align-items-center tam'>
              <i className="bi bi-people-fill IconMetric px-2"></i>
              <p className='text-white text-center m-0 px-3 py-2 fs-4'>{metrics.people}</p>
            </div>}
            {metrics.man && <div className='d-flex flex-row flex-md-column justify-content-center align-items-center'>
              <i className="bi bi-gender-male IconMetric px-2"></i>
              <p className='text-white text-center m-0 px-3 py-2 fs-4'>{metrics.man}% Hombres</p>
            </div>}
            {metrics.woman && <div className='d-flex flex-row flex-md-column justify-content-center align-items-center'>
              <i className="bi bi-gender-female IconMetric px-2"></i>
              <p className='text-white text-center m-0 px-3 py-2 fs-4'>{metrics.woman}% Mujeres</p>
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
              <i className="bi bi-twitter IconMetric2 px-2"></i>
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
