import PropTypes from "prop-types";
import "./product-card.css";

const ProductCard = ({ image, title, value }) => (
  <div className="product-card">
    <div className="product-card__img-container">
      <img className="product-card__img" src={image} alt={title} />
      <div className="product-card__details">
        <button className="product-card__btn">Go To Details</button>
      </div>
    </div>
    <div className="product-card__info">
      <h3 className="product-card__title">{title}</h3>
      <span>{value}</span>
    </div>
  </div>
);
 
ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default ProductCard;
