import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/authSlice';
import styles from './Header.module.css';

function Header() {
  const auth = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // 👈 to check current path

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link to="/" className={styles.brandLink}>
          E-Commerce Shop
        </Link>
      </div>

      <nav className={styles.centerNav}>
        <Link to="/">Home</Link>
        <Link to="/admin/products">Admin</Link>
        <Link to="/cart">Cart</Link>
      </nav>

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

