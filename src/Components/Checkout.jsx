
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Redux/cartSlice"; 
import { placeOrder } from "../Redux/ordersSlice";
import styles from "./Checkout.module.css";

function Checkout() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((s) => s.cart);
  const [address, setAddress] = useState("");

  const handlePlaceOrder = () => {
    if (!address.trim()) {
      alert("Please enter a delivery address before placing order.");
      return;
    }

    dispatch(
      placeOrder({
        items,
        total,
        address,
      })
    );

   
    dispatch(clearCart());

    // Clear address input
    setAddress("");

    alert(`Order placed!\n\nTotal: $${total.toFixed(2)}\nDelivery to: ${address}`);
  };

  return (
    <div className={styles.checkout}>
      <h2>Checkout</h2>

      {/* Order Summary */}
      <div className={styles.summary}>
        <h3>Order Summary</h3>
        <ul>
          {Object.values(items).map((i) => (
            <li key={i.id}>
              <span>{i.title} × {i.qty}</span>
              <span>${(i.price * i.qty).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className={styles.total}>Total: ${total.toFixed(2)}</div>
      </div>

      {/* Delivery Address */}
      <div className={styles.form}>
        <label htmlFor="address">Delivery Address</label>
        <textarea
          id="address"
          placeholder="Enter your full delivery address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className={styles.button} onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;



