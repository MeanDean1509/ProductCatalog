import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import axiosClient from '../api/axiosClient';
import styles from './ProductList.module.css';

function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const url = category ? `/products/category/${category}` : '/products';
    axiosClient.get(url)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, [category]);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
     
      <div className={styles.grid}>
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default ProductList;