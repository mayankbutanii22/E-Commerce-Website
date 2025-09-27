
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct, deleteProduct } from '../Redux/productsSlice';
import styles from './AdminProducts.module.css';

function AdminProducts() {
  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch();

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Trending Products');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');
  const [editId, setEditId] = useState(null);

  const categories = ['Trending Products', 'New Arrivals', 'Featured Products', 'Sitemap'];

  const handleAddOrEdit = () => {
    if (!title || !price || !category) return;

    const productData = {
      title,
      description,
      price: Number(price),
      category,
      stock: Number(stock),
      image
    };

    if (editId) {
      dispatch(editProduct({ id: editId, ...productData }));
      setEditId(null);
    } else {
      dispatch(addProduct(productData));
    }

    // Reset form
    setTitle('');
    setDescription('');
    setPrice('');
    setCategory('Trending Products');
    setStock('');
    setImage('');
  };

  const handleEditClick = (product) => {
    setEditId(product.id);
    setTitle(product.title);
    setDescription(product.description || '');
    setPrice(product.price);
    setCategory(product.category);
    setStock(product.stock || '');
    setImage(product.image || '');
  };

  return (
    <div className={styles.admin}>
      <h2>Admin: Manage Products</h2>

      {/* Form */}
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <input
          placeholder="Stock"
          value={stock}
          onChange={e => setStock(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <button onClick={handleAddOrEdit}>
          {editId ? 'Update' : 'Add'}
        </button>
      </div>

      {/* Products List */}
      <ul className={styles.list}>
        {products.length > 0 ? (
          products.map(p => (
            <li key={p.id} className={styles.item}>
              <img src={p.image} alt={p.title} className={styles.thumb}/>
              <div className={styles.info}>
                <h4>{p.title}</h4>
                <p>${p.price} | Stock: {p.stock || 0}</p>
                <p className={styles.category}>{p.category}</p>
              </div>
              <div className={styles.actions}>
                <button onClick={() => handleEditClick(p)} className={styles.edit}>Edit</button>
                <button onClick={() => dispatch(deleteProduct(p.id))} className={styles.delete}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>
    </div>
  );
}

export default AdminProducts;

