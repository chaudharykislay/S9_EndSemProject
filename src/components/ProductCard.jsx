import { Link } from "react-router-dom";


function ProductCard({ product }) {
  return (
    <div className="card">
      {/* Wrapper to keep image inside the box */}
      <div className="img-wrapper">
        <img src={product.image} alt={product.title} />
      </div>
      
      <div className="card-content">
        <h3>{product.title}</h3>
        <p className="price">₹ {product.price}</p>
        <Link to={`/product/${product.id}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;