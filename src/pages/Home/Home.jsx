import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import ProductCard from "../../components/ProductCard";
import "./home.css";

const Home = () => (
  <div className="home">
    <h2 className="home__title">Products</h2>
    <div className="home__cards-container">
      <ProductCard 
        image= {img1}
        title="Fern Signet Ring"
        value="$20000"
      />
      <ProductCard 
        image= {img2}
        title="Slow Sundays Hoodie - Brown"
        value="$10000"
      />
       <ProductCard 
        image= {img3}
        title="Wayfare Waxed Canvas Jacket"
        value="$5000"
      />
       <ProductCard 
        image= {img4}
        title="Long Haul Postal Jacket - Ink"
        value="$22000"
      />
    </div>
  </div>
);
  
export default Home;