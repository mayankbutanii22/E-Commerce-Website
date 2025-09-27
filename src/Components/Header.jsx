import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/authSlice';
import styles from './Header.module.css';

function Header() {
  const auth = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link to="/" className={styles.brandLink}>
          E-Commerce Shop
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div>

      {/* Nav Links */}
      <nav
        className={`${styles.centerNav} ${menuOpen ? styles.active : ''}`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/admin/products" onClick={() => setMenuOpen(false)}>Admin</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
      </nav>

      {/* Auth Buttons */}
      <div className={styles.authNav}>
        {auth.user ? (
          <>
            <Link to="/profile" className={styles.userLink}>
              {auth.user.username}
            </Link>
            <button
              className={styles.logout}
              onClick={() => {
                dispatch(logout());
                navigate('/login');
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className={`${styles.authBtn} ${
                location.pathname === '/signup' ? styles.active : ''
              }`}
              onClick={() => navigate('/signup')}
            >
              Signup
            </button>
            <button
              className={`${styles.authBtn} ${
                location.pathname === '/login' ? styles.active : ''
              }`}
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;


