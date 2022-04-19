import img1 from "../../assets/images/img1.png";
import "./product-details.css";

const ProductDetails = () => (
  <div className="product-details">
    <img className="product-details__image" src={img1} alt=""/>
    <div className="product-details__info">
      <h3 className="product-details__title">Fern Signet Ring</h3>
      <span className="product-details__value">$20000</span>
      <div className="product-details__container-size">
        <button className="product-details__size">XS</button>
        <button className="product-details__size">S</button>
        <button className="product-details__size">M</button>
        <button className="product-details__size">L</button>
        <button className="product-details__size">XL</button>
        <button className="product-details__size">XXL</button>
      </div>
      <button className="product-details__btn">Add to Cart</button>
      <div className="product-details__description">
        <h5 className="product-details__subtitle">Details</h5>
        <p className="product-details__text">
        The Slow Sundays Hoodie in brown is a classic athletic fit hoodie with more room on the chest & shoulders, with a more tapered hem. It is made from a mid-weight 420 GSM unbrushed French Terry material that makes for a durable yet comfortable piece- ideal for transitional layering. Inspired by vintage gym wear, it features a ribbed hem, cuffs and a drawstring hood.
        </p>
      </div>
      <h5 className="product-details__category">Category: Men's Clothing</h5>
      <div className="product-details__rating">
        <span className="product-details__rate">Rate: 3.9</span>
        <span className="product-details__count">Count: 120</span>
      </div>
    </div>
  </div>
);
  
export default ProductDetails;
