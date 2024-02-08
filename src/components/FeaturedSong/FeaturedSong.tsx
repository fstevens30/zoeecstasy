import "./FeaturedSong.scss";
import WebPlayer from "./WebPlayer";

function FeaturedSong() {
  return (
    <div>
      <h2>Featured Song</h2>
      <WebPlayer url="https://open.spotify.com/embed/track/0MFqHspwuYW7LFlldeXfAa?utm_source=generator&theme=0" />
    </div>
  );
}

export default FeaturedSong;
