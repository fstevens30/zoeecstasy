import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faYoutube,
  faItunesNote,
  faSoundcloud,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                tour
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                contact
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://open.spotify.com/artist/6ujW3pX50DpH6Cu9MeX8nq"
              >
                <FontAwesomeIcon icon={faSpotify} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.youtube.com/channel/UCE7ewWTxgYjsJwQMbh_QWUQ"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://music.apple.com/nz/artist/zoe-ecstasy/1650651815"
              >
                <FontAwesomeIcon icon={faItunesNote} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://soundcloud.com/zoeecstasy">
                <FontAwesomeIcon icon={faSoundcloud} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.instagram.com/zoeecstasy/"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.tiktok.com/@zoeecstasy">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
