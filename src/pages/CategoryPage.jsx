import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import ProductList from '../components/ProductList';

function CategoryPage() {
  const { slug } = useParams();
  return (
    <div>
      <Header />
      <CategoryFilter />
      <h1>Danh mục: {slug}</h1>
      <ProductList category={slug} />
    </div>
  );
}

export default CategoryPage;