import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import "./home.css";

const Home = () => (
  <div className="home">
    <h2 className="home__title">Products</h2>
    <div className="home__cards-container">
      <div className="home__card">
        <img className="home__card-img" src={img1} alt="image1" />
        <div className="home__card-info">
          <h3 className="home__card-title">Fern Signet Ring</h3>
          <span>$20000</span>
        </div>
      </div>
      <div className="home__card">
        <img className="home__card-img" src={img2} alt="image2" />
        <div className="home__card-info">
          <h3 className="home__card-title">Slow Sundays Hoodie - Brown</h3>
          <span>$20000</span>
        </div>
      </div>
      <div className="home__card">
        <img className="home__card-img" src={img3} alt="image3" />
        <div className="home__card-info">
          <h3 className="home__card-title">Wayfare Waxed Canvas Jacket</h3>
          <span>$20000</span>
        </div>
      </div>
      <div className="home__card">
        <img className="home__card-img" src={img4} alt="image4" />
        <div className="home__card-info">
          <h3 className="home__card-title">Long Haul Postal Jacket - Ink</h3>
          <span>$20000</span>
        </div>
      </div>
    </div>
  </div>
);
  
export default Home;