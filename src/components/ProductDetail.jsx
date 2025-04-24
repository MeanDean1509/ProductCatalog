import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';
import styles from './ProductDetail.module.css';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosClient.get(`/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Đang tải...</p>;

  return (
    <div>
      <Header />
      <CategoryFilter />
      <div className={styles.detail}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={150} />
      <p>{product.description}</p>
      <p><strong>Giá: </strong>${product.price}</p>
    </div>
    </div>
    
    
  );
}

export default ProductDetail;