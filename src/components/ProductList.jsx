import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import useProducts from "../hooks/useProducts";

function ProductList() {
  const { products, loading, error } = useProducts();
  const { name } = useParams(); // get category from URL
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // 1️⃣ Category filtering
    if (name && name !== "all") {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === name.toLowerCase()
      );
    }

    // 2️⃣ Search filtering
    if (search) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filtered;
  }, [products, search, name]);

  if (loading) return <div className="dark-loader"><Loader /></div>;
  if (error) return <div className="error-msg">{error}</div>;

  return (
    <div className="product-list-page">
      <SearchBar search={search} setSearch={setSearch} />

      {name && (
        <h2 className="category-title">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
      )}

      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;