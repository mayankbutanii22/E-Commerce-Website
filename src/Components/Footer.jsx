import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../Redux/productsSlice";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setCategoryFilter(category));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About Section */}
        <div className={styles.section}>
          <h3>E-Commerce Shop</h3>
          <p>
            Welcome to E-Commerce Shop, your one-stop destination for the latest trends and quality products. Enjoy fast delivery and excellent customer service every time you shop.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin/products">Admin</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        {/* Shop Now */}
        <div className={styles.section}>
          <h4>Shop Now</h4>
          <ul>
            <li><button onClick={() => handleCategoryClick("Trending Products")}>Trending Products</button></li>
            <li><button onClick={() => handleCategoryClick("New Arrivals")}>New Arrivals</button></li>
            <li><button onClick={() => handleCategoryClick("Featured Products")}>Featured Products</button></li>
            <li><button onClick={() => handleCategoryClick("Sitemap")}>Sitemap</button></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className={styles.section}>
          <h4>Contact Us</h4>
          <p>📍 At-Talali, Ta-Kunkavav, Dis-Amreli, Gujarat, India - 365450</p>
          <p>📞 +91 973-796-XXXX</p>
          <p>✉️ mayankbutanii22@gmail.com</p>
          <div className={styles.socials}>
            <a href="https://www.facebook.com" target="_blank"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank"><FaInstagram /></a>
            <a href="https://www.youtube.com" target="_blank"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} E-Commerce Shop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


