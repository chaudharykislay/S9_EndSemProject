import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchProductById } from "../api/productApi";
import Loader from "./Loader";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductById(id)
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemIndex = existingCart.findIndex(
      item => item.id === product.id
    );

    if (itemIndex !== -1) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert("Added to cart!");
    navigate("/cart"); // 🔥 optional auto redirect
  };

  if (loading) return <Loader />;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <div className="product-detail-container">

        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-detail-content">
          <h2>{product.title}</h2>

          {product.rating && (
            <div className="product-rating">
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </div>
          )}

          <p>{product.description}</p>

          <h3>₹ {product.price}</h3>

          <div className="product-detail-actions">
            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <Link to="/" className="product-detail-btn">
              Back
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;