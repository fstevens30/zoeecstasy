import "./Nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faYoutube,
  faItunesNote,
  faSoundcloud,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>

      <div className="social-icons">
        <a
          href="https://open.spotify.com/artist/6ujW3pX50DpH6Cu9MeX8nq"
          target="_blank"
        >
          <FontAwesomeIcon className="fa-icon" icon={faSpotify} />
        </a>
        <a
          href="https://music.youtube.com/channel/UCE7ewWTxgYjsJwQMbh_QWUQ"
          target="_blank"
        >
          <FontAwesomeIcon className="fa-icon" icon={faYoutube} />
        </a>
        <a
          href="https://music.apple.com/nz/artist/zoe-ecstasy/1650651815"
          target="_blank"
        >
          <FontAwesomeIcon className="fa-icon" icon={faItunesNote} />
        </a>
        <a href="https://soundcloud.com/zoeecstasy" target="_blank">
          <FontAwesomeIcon className="fa-icon" icon={faSoundcloud} />
        </a>
        <a href="https://www.instagram.com/zoeecstasy/" target="_blank">
          <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
        </a>
        <a href="https://www.tiktok.com/@zoeecstasy" target="_blank">
          <FontAwesomeIcon className="fa-icon" icon={faTiktok} />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
