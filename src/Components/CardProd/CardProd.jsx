import './cardProd.css'

const CardProd = ({ product }) => {
  return (
    <div className='d-flex flex-row cardProd col-md-4 col-11 m-2'>
      <div className='d-flex align-items-center justify-content-center col-5'>
        <img src={product.picture} alt="" className='imgProd' />
      </div>
      <div className='contText'>
        <h3 className='CardProdTitle'>{product.productName}</h3>
        <p className='CardProdDesc px-2'>{product.description}</p>
      </div>
    </div>
  )
}

export default CardProd
