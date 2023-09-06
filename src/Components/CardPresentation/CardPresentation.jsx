import './cardPresentation.css'

const CardPresentation = ({ person }) => {
  return (
    <div className="cardPresentation d-flex flex-row col-11 col-sm-5 col-lg-3">
      <div className='d-flex flex-column col-6 align-items-center justify-content-center' >
        <img src={person.picture} className="cardPresentation-image " alt="avatar"></img>
      </div>
      <div className="card-body d-flex flex-column justify-content-center align-items-center col-6">
        <div className='contText'>
          <h2 className="cardPresentation-title text-center mt-2">{ person.name } </h2>
          <p className="card-text cardPresentation-description px-2">{person.description} </p>
        </div>
        <div className="cardPresentation-icons">
          <ul className='list-unstyled m-0 d-flex flex-row align-items-center justify-content-center px-0'>
            <li>
              <a href={ person.insta } target="_blank" rel="noreferrer">
                <i className="bi bi-instagram colorIco circle-iconp"></i>
              </a>
            </li>
            <li>
              <a href={ person.tiktok } target="_blank" rel="noreferrer">
                <i className="bi bi-tiktok colorIco circle-iconp"></i>
              </a>
            </li>
            <li>
              <a href={ person.gmail } target="_blank" rel="noreferrer">
                <i className="bi bi-envelope-at colorIco circle-iconp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardPresentation
