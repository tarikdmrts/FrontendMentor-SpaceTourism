import "./home.css";
import NavBar from "../Navigation/Navigation.jsx";

function Home() {
  return (
    <div className="home">
      <div className="home-bg"></div>
      <div className="home-content">
        <NavBar />
        <div className="home-header">
          <h2 className="home-small-header">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="home-big-header">SPACE</h1>
          <p className="home-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
          <div className="explore-btn">EXPLORE</div>
      </div>
    </div>
  );
}

export default Home;
