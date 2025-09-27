import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../Redux/cartSlice';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

function Cart() {
  const { items, total } = useSelector(s => s.cart);
  const dispatch = useDispatch();

  return (
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      {Object.keys(items).length === 0 ? (
        <p className={styles.empty}>No items in cart</p>
      ) : (
        <>
          <ul className={styles.list}>
            {Object.values(items).map(item => (
              <li key={item.id} className={styles.item}>
                <img src={item.image} alt={item.title} className={styles.thumb} />
                <div className={styles.details}>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.category}>{item.category}</span>
                  <span className={styles.price}>${item.price.toFixed(2)}</span>
                  <input
                    value={item.qty}
                    min="1"
                    onChange={e =>
                      dispatch(updateQuantity({ id: item.id, qty: Number(e.target.value) }))
                    }
                    className={styles.qty}
                  />
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className={styles.remove}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.total}>Total: ${total.toFixed(2)}</div>
          <Link to="/checkout" className={styles.checkout}>
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
