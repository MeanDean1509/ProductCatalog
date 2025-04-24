import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <a href={`/products/${product.id}`} className={styles.link}>Xem chi tiết</a>
    </div>
  );
}

export default ProductCard;