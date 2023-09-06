import './cardComer.css'

const CardComer = ({ product }) => {
  return (
    <div className='d-flex flex-column cardComer col-sm-5 col-md-3 col-11 m-2'>
      <div className='d-flex align-items-center justify-content-center col-12 mt-2'>
        <img src={product.picture} alt="" className='imgComer' />
      </div>
      <div className='contText'>
        <h3 className='CardComerTitle px-1'>{product.productName}</h3>
        <p className='CardComerDesc px-3 pt-2'>{product.format}</p>
      </div>
    </div>
  )
}

export default CardComer
