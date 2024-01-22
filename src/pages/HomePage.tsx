import Feature from "../components/Feature/Feature";
import FeaturedSong from "../components/FeaturedSong/FeaturedSong";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import SongList from "../components/SongList/SongList";

function HomePage() {
  return (
    <>
      <Hero />
      <Feature />
      <FeaturedSong />
      <SongList />
      <Footer />
    </>
  );
}

export default HomePage;
