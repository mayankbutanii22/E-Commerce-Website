import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../Redux/authSlice";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.auth);

  const [form, setForm] = useState({
    fullName: "",
    username: "",
    contact: "",
  });

  
  useEffect(() => {
    if (user) {
      setForm({
        fullName: user.fullName || "",
        username: user.username || "",
        contact: user.contact || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.username) {
      alert("Username is required!");
      return;
    }

   
    dispatch(updateProfile(form));

  
    setForm({ fullName: "", username: "", contact: "" });

    alert("Profile updated successfully!");
  };

  if (!user) {
    return (
      <div className={styles.redirect}>
        <h2>You are not logged in</h2>
        <p>
          Please <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link> to access your profile.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.profile}>
      <h2>Welcome back, {user.username}!</h2>
      <div className={styles.details}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
          />
        </label>
      </div>
      <button className={styles.saveBtn} onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default Profile;







