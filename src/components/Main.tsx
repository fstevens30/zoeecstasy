import "./Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faYoutube,
  faItunesNote,
  faSoundcloud,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Main() {
  return (
    <div className="main">
      <h1>zoe ecstasy</h1>

      <h2>coming soon...</h2>

      <div id="socialIcons">
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
    </div>
  );
}

export default Main;
