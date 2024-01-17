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
        <a href="">
          <FontAwesomeIcon className="fa-icon" icon={faSpotify} />
        </a>
        <a href="">
          <FontAwesomeIcon className="fa-icon" icon={faYoutube} />
        </a>
        <a href="">
          <FontAwesomeIcon className="fa-icon" icon={faItunesNote} />
        </a>
        <a href="">
          <FontAwesomeIcon className="fa-icon" icon={faSoundcloud} />
        </a>
        <a href="">
          <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
        </a>
        <a href="">
          <FontAwesomeIcon className="fa-icon" icon={faTiktok} />
        </a>
      </div>
    </div>
  );
}

export default Main;
