import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';
import { Link } from 'react-router-dom';
import styles from './CategoryFilter.module.css';

function CategoryFilter() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosClient.get('/products/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.list}>
      {categories.map(c => (
        <Link className={styles.link} key={c} to={`/category/${c}`}>{c}</Link>
      ))}
    </div>
  );
}

export default CategoryFilter;