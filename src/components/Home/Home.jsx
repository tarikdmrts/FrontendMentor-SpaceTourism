import "./home.css";
import NavBar from "../Navigation/Navigation.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-bg"></div>
      <NavBar />
      <div className="content">
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
        <div className="explore-btn" onClick={() => navigate("/destinations")}>
          <span>EXPLORE</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
