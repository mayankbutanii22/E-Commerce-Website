import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard() {
  const products = useSelector((state) => state.products.items);
  const filteredCategory = useSelector((state) => state.products.filteredCategory); 

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchName = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = filteredCategory === "All" || p.category === filteredCategory;
    return matchName && matchCategory;
  });

  return (
    <div className={styles.page}>
      
      <div className={styles.filterBar}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.search}
        />
      </div>

      {/* Products Grid */}
      <div className={styles.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.thumb}>
                <img src={product.image} alt={product.title} />
              </div>
              <div className={styles.body}>
                <h3>{product.title}</h3>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
                <span className={styles.category}>{product.category}</span>
                <div className={styles.actions}>
                  <Link to={`/product/${product.id}`} className={styles.view}>View</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;




