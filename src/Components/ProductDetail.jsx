import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import styles from './ProductDetail.module.css';

function ProductDetail() {
  const { id } = useParams();
  const product = useSelector(s => s.products.items.find(p => p.id === Number(id)));
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
    navigate('/cart');            
  };

  return (
    <div className={styles.detail}>
      <div className={styles.img}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.info}>
        <h2>{product.title}</h2>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Stock:</strong> In Stock</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p><strong>Description:</strong> {product.description || 'No description available.'}</p>
        <button className={styles.add} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;

