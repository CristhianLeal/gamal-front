import './cardPresentation.css'

const CardPresentation = ({ person }) => {
  return (
    <div className="cardPresentation d-flex flex-wrap col-11 col-sm-5 col-lg-3">
      <div className='d-flex flex-column col-6 align-items-center justify-content-center' >
        <img src={person.picture} className="cardPresentation-image " alt="avatar"></img>
      </div>
      <div className="card-body d-flex flex-column justify-content-center align-items-center col-6">
        <div className='contText'>
          <h2 className="cardPresentation-title text-center mt-2">{ person.name } </h2>
          <div className='CardComerDesc px-3 pt-2' dangerouslySetInnerHTML={{ __html: person.description }}></div>
        </div>
        <div className="cardPresentation-icons">
          <ul className='list-unstyled m-0 d-flex flex-row align-items-center justify-content-center px-0'>
            {person.insta && <li>
              <a href={ person.insta } target="_blank" rel="noreferrer">
                <i className="bi bi-instagram colorIco circle-iconp"></i>
              </a>
            </li>}
            {person.face && <li>
              <a href={ person.face } target="_blank" rel="noreferrer">
                <i className="bi bi-facebook colorIco circle-iconp"></i>
              </a>
            </li>}
            {person.tiktok && <li>
              <a href={ person.tiktok } target="_blank" rel="noreferrer">
                <i className="bi bi-tiktok colorIco circle-iconp"></i>
              </a>
            </li>}
            {person.gmail && <li>
              <a href={ `mailto:${person.gmail}` } target="_blank" rel="noreferrer">
                <i className="bi bi-envelope-at colorIco circle-iconp"></i>
              </a>
            </li>}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardPresentation
